import * as React from "react";

export const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={`bg-card text-card-foreground rounded-lg shadow-lg p-6 mb-6 ${className ?? ""}`}>
    {children}
  </div>
);
