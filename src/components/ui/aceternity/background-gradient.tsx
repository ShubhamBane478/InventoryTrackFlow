import { cn } from "@/utils/cn";
import React from "react";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const animationClass = animate
    ? "animate-rotate-gradient"
    : "";

  return (
    <div className={cn("relative p-[4px] group", containerClassName)}>
      <div
        className={cn(
          "absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500",
          animationClass
        )}
      />
      <div
        className={cn(
          "relative bg-black rounded-lg p-4",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};