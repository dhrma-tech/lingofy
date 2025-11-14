import * as React from "react";

export const Label: React.FC<{ htmlFor?: string; children: React.ReactNode }> = ({ htmlFor, children }) => (
  <label htmlFor={htmlFor} className="block text-card-foreground font-medium mb-2">
    {children}
  </label>
);
