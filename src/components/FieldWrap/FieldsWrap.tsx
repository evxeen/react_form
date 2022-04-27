import React, { FC } from "react";
import "./FieldWrap.scss";

interface FieldsWrapProps {
  children: React.ReactNode;
}

export const FieldsWrap: FC<FieldsWrapProps> = ({
  children,
}: FieldsWrapProps) => {
  return <div className="field-wrap">{children}</div>;
};
