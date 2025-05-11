"use client";

import { motion } from "motion/react";

interface HeaderAnimationProps {
  children: React.ReactNode;
}

export function HeaderAnimation({ children }: HeaderAnimationProps) {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-background border-b border-border shadow-sm sticky top-0 z-10"
    >
      {children}
    </motion.header>
  );
}
