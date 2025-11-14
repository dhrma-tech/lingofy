import * as React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input: React.FC<InputProps> = ({ label, ...props }) => (
  <div className="mb-4">
    {label && <label className="block mb-1 text-muted-foreground font-semibold">{label}</label>}
    <input
      {...props}
      className="w-full px-3 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-pink-400"
    />
  </div>
);
