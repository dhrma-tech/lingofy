import * as React from "react";

export const Separator: React.FC<{ className?: string }> = ({ className }) => (
  <hr className={`my-6 border-t border-muted ${className ?? ""}`} />
);
