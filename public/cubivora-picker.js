/**
 * Cubivora Element Picker — 프리뷰에서 고른 요소를 편집 대상으로 알려주는 스크립트 (자동 생성)
 *
 * 이 파일은 Cubivora 가 생성했습니다. Cubivora 편집 화면에서 「요소 선택」을 켰을 때만
 * 동작하며, 그 외에는 아무 일도 하지 않습니다. DOM 을 바꾸지 않고, 외부로 보내는 것은
 * 클릭한 요소의 태그·컴포넌트명·텍스트·위치뿐입니다.
 *
 * 원하지 않으면 이 파일을 삭제하고 import 를 지우면 됩니다.
 * 삭제해도 앱 동작에는 아무 영향이 없습니다.
 */
(function () {
  if (typeof window === "undefined") return;
  if (window.parent === window) return;      // 임베드된 경우에만 의미가 있다
  if (window.__cbvPicker) return;            // 중복 주입 방어

  var READY = "cbv:picker:ready";
  var ON = "cbv:picker:on";
  var OFF = "cbv:picker:off";
  var SELECTED = "cbv:picker:selected";

  var active = false;
  var parentOrigin = null;   // 활성화 메시지가 알려준 값만 신뢰한다
  var box = null;
  var label = null;
  var hovered = null;

  function send(type, payload) {
    if (!parentOrigin) return;
    try {
      window.parent.postMessage({ type: type, payload: payload || null }, parentOrigin);
    } catch (e) { /* noop */ }
  }

  function ensureOverlay() {
    if (box) return;
    box = document.createElement("div");
    box.style.cssText = [
      "position:fixed", "z-index:2147483646", "pointer-events:none",
      "border:2px solid #4f46e5", "border-radius:3px",
      "background:rgba(79,70,229,0.10)", "transition:all .05s linear",
      "display:none"
    ].join(";");
    label = document.createElement("div");
    label.style.cssText = [
      "position:fixed", "z-index:2147483647", "pointer-events:none",
      "background:#4f46e5", "color:#fff", "font:600 11px/1.4 ui-sans-serif,system-ui,sans-serif",
      "padding:2px 6px", "border-radius:3px", "white-space:nowrap",
      "max-width:60vw", "overflow:hidden", "text-overflow:ellipsis",
      "display:none"
    ].join(";");
    document.body.appendChild(box);
    document.body.appendChild(label);
  }

  function hideOverlay() {
    if (box) box.style.display = "none";
    if (label) label.style.display = "none";
  }

  /** React fiber 를 거슬러 올라가 가장 가까운 컴포넌트 이름을 찾는다(dev 빌드에서 동작). */
  function componentName(el) {
    try {
      var key = null, keys = Object.keys(el);
      for (var i = 0; i < keys.length; i++) {
        if (keys[i].indexOf("__reactFiber$") === 0 ||
            keys[i].indexOf("__reactInternalInstance$") === 0) { key = keys[i]; break; }
      }
      if (!key) return "";
      var fiber = el[key], hops = 0;
      while (fiber && hops < 30) {
        var t = fiber.type;
        if (typeof t === "function") return t.displayName || t.name || "";
        if (t && typeof t === "object" && (t.displayName || t.render)) {
          return t.displayName || (t.render && (t.render.displayName || t.render.name)) || "";
        }
        fiber = fiber["return"];
        hops++;
      }
    } catch (e) { /* noop */ }
    return "";
  }

  /** 짧고 안정적인 CSS 경로 — 편집 에이전트가 파일을 찾는 보조 단서. */
  function cssPath(el) {
    var parts = [], node = el, guard = 0;
    while (node && node.nodeType === 1 && guard < 6) {
      var part = node.tagName.toLowerCase();
      if (node.id) { parts.unshift(part + "#" + node.id); break; }
      var cls = String(node.className || "").trim().split(/\s+/).filter(Boolean).slice(0, 2);
      if (cls.length) part += "." + cls.join(".");
      var parent = node.parentElement;
      if (parent) {
        var same = [], kids = parent.children;
        for (var i = 0; i < kids.length; i++) {
          if (kids[i].tagName === node.tagName) same.push(kids[i]);
        }
        if (same.length > 1) part += ":nth-of-type(" + (same.indexOf(node) + 1) + ")";
      }
      parts.unshift(part);
      node = node.parentElement;
      guard++;
    }
    return parts.join(" > ");
  }

  /** 이 요소가 속한 **기능 블록**의 data-feat-id 원문("feat_<id>"). 없으면 빈 문자열.
   *  접두어를 여기서 벗기지 않는다 — 부모(previewBridge)가 벗겨 기능 목록과 대조한다. */
  function featIdOf(el) {
    try {
      var host = el.closest && el.closest("[data-feat-id]");
      return host ? (host.getAttribute("data-feat-id") || "") : "";
    } catch (e) { return ""; }
  }

  function describe(el) {
    var r = el.getBoundingClientRect();
    var text = (el.innerText || el.textContent || "").trim().replace(/\s+/g, " ").slice(0, 120);
    return {
      tag: el.tagName.toLowerCase(),
      component: componentName(el),
      text: text,
      selector: cssPath(el),
      route: location.pathname + (location.search || ""),
      // data-cbv-src 는 2단계(AST 주입)에서 채워진다 — 없으면 빈 값이다.
      source: el.getAttribute("data-cbv-src") || "",
      // data-feat-id 는 코드생성이 기능 블록 최상단에 붙인다 — 옛 앱에는 없어 빈 값이다.
      target_feature_id: featIdOf(el),
      rect: { x: Math.round(r.left), y: Math.round(r.top),
               w: Math.round(r.width), h: Math.round(r.height) }
    };
  }

  function paint(el) {
    ensureOverlay();
    var r = el.getBoundingClientRect();
    box.style.display = "block";
    box.style.left = r.left + "px";
    box.style.top = r.top + "px";
    box.style.width = r.width + "px";
    box.style.height = r.height + "px";
    var name = componentName(el);
    label.textContent = (name ? name + " · " : "") + el.tagName.toLowerCase();
    label.style.display = "block";
    // 위쪽 공간이 없으면 요소 안쪽에 붙인다.
    var top = r.top - 20;
    label.style.left = r.left + "px";
    label.style.top = (top < 0 ? r.top + 2 : top) + "px";
  }

  function onMove(e) {
    if (!active) return;
    var el = e.target;
    if (!el || el.nodeType !== 1) return;
    hovered = el;
    paint(el);
  }

  function onClick(e) {
    if (!active) return;
    e.preventDefault();
    e.stopPropagation();
    var el = hovered || e.target;
    if (!el || el.nodeType !== 1) return;
    try { send(SELECTED, describe(el)); } catch (err) { /* noop */ }
  }

  /** 선택 모드에서 **페이지 이탈을 부르는 경로**만 삼킨다.
   *  click 은 onClick 이 이미 막지만 submit/auxclick/mousedown 은 click 없이도 발생한다
   *  (입력창 Enter 폼 제출, 가운데 클릭 새 탭, mousedown 에서 라우팅하는 UI).
   *  stopImmediatePropagation 은 쓰지 않는다 — 앱 자신의 캡처 리스너까지 끊긴다.
   *  active 가 false 면 아무것도 하지 않는다(실서비스에 그대로 배포되는 스크립트다). */
  function swallow(e) {
    if (!active) return;
    e.preventDefault();
    e.stopPropagation();
  }

  function onKey(e) {
    if (!active) return;
    if (e.key === "Escape") { setActive(false); return; }
    // Enter/Space 는 포커스된 링크·버튼을 활성화해 click 없이 페이지를 떠난다.
    if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
      e.preventDefault();
      e.stopPropagation();
    }
  }

  function setActive(on) {
    active = !!on;
    if (active) {
      ensureOverlay();
      document.addEventListener("mousemove", onMove, true);
      document.addEventListener("click", onClick, true);
      document.addEventListener("keydown", onKey, true);
      document.addEventListener("submit", swallow, true);
      document.addEventListener("auxclick", swallow, true);
      document.addEventListener("mousedown", swallow, true);
      document.documentElement.style.cursor = "crosshair";
    } else {
      document.removeEventListener("mousemove", onMove, true);
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("keydown", onKey, true);
      document.removeEventListener("submit", swallow, true);
      document.removeEventListener("auxclick", swallow, true);
      document.removeEventListener("mousedown", swallow, true);
      document.documentElement.style.cursor = "";
      hovered = null;
      hideOverlay();
    }
  }

  window.addEventListener("message", function (e) {
    var data = e && e.data;
    if (!data || typeof data !== "object") return;
    if (data.type !== ON && data.type !== OFF) return;
    // 활성화 요청이 알려준 origin 으로만 회신한다 — 아무에게나 broadcast 하지 않는다.
    if (e.origin && e.origin !== "null") parentOrigin = e.origin;
    setActive(data.type === ON);
  });

  // 마운트 가드는 위의 `if (window.__cbvPicker) return;` 이 담당한다.
  // 아래는 외부에서 읽기 편한 **별칭**일 뿐이며 판정에는 쓰이지 않는다.
  window.__cbvPicker = { setActive: setActive };
  window.__CUBIVORA_PICKER_MOUNTED__ = true;

  // 부모가 언제 붙을지 모르므로 준비 신호는 로드 시 한 번 broadcast 한다.
  // 이 메시지에는 페이지 내용이 없다(타입뿐) — 새는 정보가 없다.
  try { window.parent.postMessage({ type: READY, payload: null }, "*"); } catch (e) { /* noop */ }
})();
