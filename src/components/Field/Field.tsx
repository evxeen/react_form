import React, { FC } from "react";
import "./Field.scss";

type InputTypes =
  | "submit"
  | "text"
  | "password"
  | "email"
  | "checkbox"
  | "select";

interface Field {
  label?: string;
  type: InputTypes;
  name: string;
  hint?: string;
  select?: string[];
  className?: string;
  onChange?: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
  errorMessage?: string;
}

export const Field: FC<Field> = ({
  label,
  type,
  name,
  hint,
  select,
  className,
  onChange,
  errorMessage,
}: Field) => {
  return (
    <div className="field">
      <div className="field__text">{label}</div>

      <div className="field__input-block">
        {select && (
          <select className={className} name={name} onChange={onChange}>
            {select.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        )}

        {!select && (
          <>
            <input
              className={`${className} ${
                errorMessage ? "field__input_error" : ""
              }`}
              type={type}
              name={name}
              onChange={onChange}
            />
            {/*<div*/}
            {/*  className="field__error-text"*/}
            {/*  style={{ color: "red", fontSize: "12px" }}*/}
            {/*>*/}
            {/*  {errorMessage && errorMessage}*/}
            {/*</div>*/}
          </>
        )}
      </div>

      {hint && (
        <div
          className={
            type === "checkbox" ? "field__hint field__hint_bold" : "field__hint"
          }
        >
          {hint ? `${hint}` : null}
        </div>
      )}

      {/*{className === "field__checkbox" && (*/}
      {/*  <span className="field__label">*/}
      {/*    принимать актуальную информацию на емейл*/}
      {/*  </span>*/}
      {/*)}*/}
    </div>
  );
};
