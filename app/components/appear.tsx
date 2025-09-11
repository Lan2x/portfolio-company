"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Appear({
  children,
  className,
  delay = 0,
  y = 8,
  duration = 0.4,
}: React.PropsWithChildren<{
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
}>) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
