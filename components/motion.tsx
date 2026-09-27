"use client";

import * as React from "react";
import { motion, type Variants } from "framer-motion";

/**
 * 모션 프리셋 — 과하지 않은 등장 애니메이션(transform/opacity 만).
 * 섹션 진입에는 <FadeIn>, 리스트/그리드에는 <Stagger> + <StaggerItem> 을 쓴다.
 */

export const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export function FadeIn({
  children,
  delay = 0,
  y = 16,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-64px" }}
      transition={{ duration: 0.45, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  delay = 0,
  gap = 0.08,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  gap?: number;
  className?: string;
}) {
  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: gap, delayChildren: delay } },
  };
  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-64px" }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={fadeInVariants}>
      {children}
    </motion.div>
  );
}
