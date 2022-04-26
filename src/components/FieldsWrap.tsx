import React, { FC } from "react";

interface FieldsWrapProps {
  children: React.ReactNode;
}

export const FieldsWrap: FC<FieldsWrapProps> = ({
  children,
}: FieldsWrapProps) => {
  return <div className="field-wrap">{children}</div>;
};
