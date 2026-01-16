import React from "react";

interface BubbleProps {
  children: React.ReactNode;
  background?: string;
  className?: string;
  glowColor?: string;
}

export default function Bubble({
  children,
  background = "bg-white",
  className = "",
  glowColor,
}: BubbleProps) {
  return (
    <div
        style={{
            boxShadow: glowColor ? `0 0 40px 10px ${glowColor}55` : undefined,
        }}
        className={`
            flex items-center justify-center
            rounded-full
            shadow-xl
            ${background}
            ${className}
        `}
    >
      {children}
    </div>
  );
}
