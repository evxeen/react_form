import React, { FC } from "react";
import "./Field.scss";

interface FieldProps {
  children: React.ReactNode;
}

export const Field: FC<FieldProps> = ({ children }: FieldProps) => {
  return <div className="field">{children}</div>;
};
