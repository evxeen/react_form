import React, { ChangeEvent, FC, useState } from "react";

interface Field {
  text?: string;
  selects?: string[];
  label?: string;
  type?: boolean;
  hint?: string;
}

export const Field: FC<Field> = ({
  text,
  selects,
  hint,
  label,
  type,
}: Field) => {
  const [select, setSelect] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordVerifInput, setPasswordVerifInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [agreement, setAgreement] = useState(false);

  const citySelectHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelect(event.target.value);
  };

  const changePasswordHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswordInput(event.target.value);
  };

  const changePasswordVerifHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswordVerifInput(event.target.value);
  };

  const changeEmailHandler = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setPasswordInput(event.target.value);
  };

  return (
    <div className="field">
      <p className="field__text">{text}</p>
      {selects && (
        <select
          onChange={citySelectHandler}
          className="field__input"
          name="select"
          value={select}
        >
          {selects.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      )}

      {type && (
        <input
          className="field__input"
          type="password"
          value={passwordInput}
          onChange={changePasswordHandler}
        />
      )}

      {label && (
        <>
          <input type="checkbox" className="filed__checkbox" />
          <span className="field__label">{label}</span>
        </>
      )}

      <div className="field__hint">{hint ? `${hint}` : null}</div>
    </div>
  );
};
