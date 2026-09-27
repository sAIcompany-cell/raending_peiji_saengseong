/**
 * Cubivora Insights — 방문 계측 (자동 생성)
 *
 * 이 파일은 Cubivora 가 생성했습니다. 배포된 서비스의 방문 추이를
 * 프로젝트 소유자에게 보여주기 위한 것이며, 수집하는 값은 아래가 전부입니다:
 *   - 익명 방문자 ID (이 도메인 localStorage 에만 저장, 개인정보 아님)
 *   - 세션 ID, 경로, 리퍼러 호스트, UTM 파라미터
 * IP·쿠키·개인정보는 보내지 않습니다.
 *
 * 원하지 않으면 이 파일을 삭제하고 import 를 지우면 됩니다.
 * 삭제해도 앱 동작에는 아무 영향이 없습니다.
 */
(function () {
  if (typeof window === "undefined") return;

  var ENDPOINT = "https://api.cubivora.com/api/insights/collect";
  var KEY = "P_2aMpkKierrAs4JtmNY9MQ-ut1uD_eI";
  var VKEY = "__cubivora_vid";
  var SKEY = "__cubivora_sid";

  function rid() {
    try {
      return (crypto.randomUUID && crypto.randomUUID()) ||
        String(Date.now()) + Math.random().toString(16).slice(2);
    } catch (e) {
      return String(Date.now()) + Math.random().toString(16).slice(2);
    }
  }

  function visitorId() {
    try {
      var v = localStorage.getItem(VKEY);
      if (!v) { v = rid(); localStorage.setItem(VKEY, v); }
      return v;
    } catch (e) {
      // 프라이빗 모드 등 스토리지 차단 — 계측이 앱을 막으면 안 되므로 1회성 ID 로 진행
      return rid();
    }
  }

  function sessionId() {
    try {
      var s = sessionStorage.getItem(SKEY);
      if (!s) { s = rid(); sessionStorage.setItem(SKEY, s); }
      return s;
    } catch (e) {
      return rid();
    }
  }

  function send(payload) {
    try {
      payload.k = KEY;
      payload.v = visitorId();
      payload.s = sessionId();
      var body = JSON.stringify(payload);
      // sendBeacon 은 text/plain 이라 preflight 가 없고 페이지 이탈에도 살아남는다.
      if (navigator.sendBeacon) {
        navigator.sendBeacon(ENDPOINT, new Blob([body], { type: "text/plain" }));
        return;
      }
      fetch(ENDPOINT, { method: "POST", body: body, keepalive: true, mode: "no-cors" })
        .catch(function () {});
    } catch (e) {
      /* 계측 실패는 조용히 무시한다 */
    }
  }

  // 리퍼러는 **호스트만** 보낸다. 서버도 호스트만 저장하지만(collect._referrer_host),
  // 전체 URL 에는 남의 사이트 경로·쿼리가 섞일 수 있어 애초에 보내지 않는다.
  function refHost() {
    try {
      if (!document.referrer) return null;
      return new URL(document.referrer).host || null;
    } catch (e) {
      return null;
    }
  }

  function pageview() {
    try {
      var q = new URLSearchParams(location.search);
      send({
        e: "pageview",
        p: location.pathname.slice(0, 512),
        r: refHost(),
        us: q.get("utm_source"),
        um: q.get("utm_medium"),
        uc: q.get("utm_campaign")
      });
    } catch (e) {
      /* noop */
    }
  }

  // 앱이 커스텀 이벤트를 보낼 수 있게 열어 둔다: window.cubivora.track("signup")
  window.cubivora = window.cubivora || {};
  window.cubivora.track = function (name, meta) {
    if (!name) return;
    send({ e: "event", n: String(name).slice(0, 64), m: meta || null });
  };

  pageview();

  // SPA 라우팅 대응 — history API 를 감싸 경로 변경마다 pageview 를 남긴다.
  try {
    var push = history.pushState;
    history.pushState = function () {
      push.apply(this, arguments);
      pageview();
    };
    window.addEventListener("popstate", pageview);
  } catch (e) {
    /* noop */
  }
})();
