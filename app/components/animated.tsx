"use client";
import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0 },
};

export function StaggerContainer({
  className,
  children,
  once = true,
  amount = 0.35,
}: React.PropsWithChildren<{
  className?: string;
  once?: boolean;
  amount?: number;
}>) {
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={containerVariants}
    >
      {children}
    </motion.div>
  );
}

export function FadeInUp({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <motion.div className={cn(className)} variants={itemVariants}>
      {children}
    </motion.div>
  );
}
