import React, { FC } from "react";
import "./Field.scss";
import { FieldText } from "../FieldText/FieldText";
import { FieldInputBlock } from "../FieldInput/FieldInputBlock";
import { FieldHint } from "../FieldHint/FieldHint";

type InputTypes =
  | "button"
  | "input"
  | "text"
  | "password"
  | "email"
  | "checkbox"
  | "select";

interface Field {
  text?: string;
  data?: string[];
  typeInput: InputTypes;
  hint?: string;
  name?: string;
}

export const Field: FC<Field> = ({
  text,
  typeInput,
  hint,
  data,
  name,
}: Field) => {
  return (
    <div className="field">
      <FieldText text={text} />
      <FieldInputBlock typeInput={typeInput} data={data} name={name} />
      <FieldHint hint={hint} typeInput={typeInput} />
    </div>
  );
};
