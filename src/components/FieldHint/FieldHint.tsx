import React, { FC } from "react";
import "./FieldHint.scss";

interface FieldHintProps {
  hint?: string;
  typeInput?: string;
}

export const FieldHint: FC<FieldHintProps> = ({
  hint,
  typeInput,
}: FieldHintProps) => {
  return (
    <div
      className={typeInput === "checkbox" ? "field__hint_bold" : "field__hint"}
    >
      {hint}
    </div>
  );
};
