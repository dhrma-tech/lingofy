import * as React from "react";

export const Alert: React.FC<{ type?: "success" | "error" | "info"; children: React.ReactNode }> = ({ type = "info", children }) => {
  const color =
    type === "success"
      ? "bg-green-100 border-green-400 text-green-800"
      : type === "error"
      ? "bg-red-100 border-red-400 text-red-800"
      : "bg-blue-100 border-blue-400 text-blue-800";
  return (
    <div className={`border-l-4 p-4 mb-4 rounded ${color}`}>
      {children}
    </div>
  );
};
