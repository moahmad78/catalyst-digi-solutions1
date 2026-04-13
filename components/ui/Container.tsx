import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

const Container = ({ children, className, as: Component = "div" }: ContainerProps) => {
  return (
    <Component className={cn("max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-10", className)}>
      {children}
    </Component>
  );
};

export default Container;
