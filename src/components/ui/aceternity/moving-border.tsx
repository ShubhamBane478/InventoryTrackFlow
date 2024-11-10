import React from "react";
import { cn } from "@/utils/cn";

export const MovingBorder = ({
  children,
  duration = 2000,
  className,
  containerClassName,
  borderClassName,
  as: Component = "div",
}: {
  children: React.ReactNode;
  duration?: number;
  className?: string;
  containerClassName?: string;
  borderClassName?: string;
  as?: any;
}) => {
  return (
    <Component
      className={cn(
        "relative cursor-pointer bg-slate-900 p-[1px] transition-all hover:scale-105",
        containerClassName
      )}
    >
      <div
        className={cn(
          "absolute inset-0 z-10 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-0 transition-all duration-500 group-hover:opacity-100",
          borderClassName
        )}
      />
      <div className={cn("relative z-20 bg-slate-900 p-4", className)}>
        {children}
      </div>
    </Component>
  );
};