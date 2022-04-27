import React, { FC } from "react";
import "./Field.scss";

interface Field {
  label?: string;
  type: string;
  name: string;
  id: string;
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
  id,
  hint,
  select,
  className,
  onChange,
}: Field) => {
  return (
    <div className="field">
      <p className="field__text">{label}</p>
      {select ? (
        <select className={className} name={name} id={id} onChange={onChange}>
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
          id={id}
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

// {selects && (
//     <select className="field__input" name="select">
//       {selects.map((opt) => (
//         <option key={opt} value={opt}>
//           {opt}
//         </option>
//       ))}
//     </select>
//   )}

// {name === "password" ? (
//   <input name={name} className="field__input" type={name} />
// ) : (
//   <input name={name} className="field__input" type={name} />
// )}

// {label && (
//   <>
//     <input type="checkbox" className="filed__checkbox" />
//     <span className="field__label">{label}</span>
//   </>
// )}

// <button>отпраить</button>
