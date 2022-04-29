import React, { FC } from "react";
import "./FieldText.scss";

interface FieldTextProps {
  text?: string;
}

export const FieldText: FC<FieldTextProps> = ({ text }: FieldTextProps) => {
  return <div className="field__text">{text}</div>;
};
