import * as React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost"
}

export const Button: React.FC<ButtonProps> = ({ variant = "default", children, ...props }) => {
  return (
    <button
      className={
        `px-4 py-2 rounded-lg font-semibold transition-colors shadow text-white ` +
        (variant === "default"
          ? "bg-pink-600 hover:bg-pink-700"
          : "bg-transparent text-pink-700 border border-pink-400 hover:bg-pink-50")
      }
      {...props}
    >
      {children}
    </button>
  );
};
