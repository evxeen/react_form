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
}

export const Field: FC<Field> = ({
  label,
  type,
  name,
  hint,
  select,
  className,
  onChange,
}: Field) => {
  return (
    <div className="field">
      <p className="field__text">{label}</p>
      {select ? (
        <select className={className} name={name} onChange={onChange}>
          {select.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : (
        <input
          className={className}
          type={type}
          name={name}
          onChange={onChange}
        />
      )}
      {className === "field__checkbox" && (
        <span className="field__label">
          принимать актуальную информацию на емейл
        </span>
      )}

      <div className="field__hint">{hint ? `${hint}` : null}</div>
    </div>
  );
};
