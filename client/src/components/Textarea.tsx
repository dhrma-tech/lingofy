import * as React from "react";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export const Textarea: React.FC<TextareaProps> = ({ label, ...props }) => (
  <div className="mb-4">
    {label && <label className="block mb-1 text-muted-foreground font-semibold">{label}</label>}
    <textarea
      {...props}
      className="w-full px-3 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-pink-400"
      rows={props.rows || 4}
    />
  </div>
);
