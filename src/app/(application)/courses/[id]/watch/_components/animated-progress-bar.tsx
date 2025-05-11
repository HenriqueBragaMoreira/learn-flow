import { motion } from "motion/react";
import { cn } from "~/lib/cva";

interface AnimatedProgressBarProps {
  progress: number;
  className?: string;
}

export function AnimatedProgressBar({
  progress,
  className,
}: AnimatedProgressBarProps) {
  return (
    <motion.div
      className={cn("bg-purple-500", className)}
      initial={{ width: "0%" }}
      animate={{ width: `${progress}%` }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    />
  );
}
