import { cn } from "@/utils/cn";
import React from "react";
import { motion } from "framer-motion";

export const Sparkles = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const random = () => Math.floor(Math.random() * 10);
  return (
    <span className="relative inline-block">
      <motion.span
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          opacity: [0, 1, 0],
          scale: [0, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: random(),
        }}
        className="absolute left-0 top-0 h-2 w-2 rotate-[15deg] rounded-full bg-blue-400"
      />
      <motion.span
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          opacity: [0, 1, 0],
          scale: [0, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: random(),
        }}
        className="absolute right-0 top-0 h-2 w-2 rotate-[15deg] rounded-full bg-purple-400"
      />
      <motion.span
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          opacity: [0, 1, 0],
          scale: [0, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: random(),
        }}
        className="absolute bottom-0 left-0 h-2 w-2 rotate-[15deg] rounded-full bg-pink-400"
      />
      <span className={cn("relative", className)} {...props}>
        {children}
      </span>
    </span>
  );
};