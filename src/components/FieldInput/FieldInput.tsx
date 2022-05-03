import React, { FC } from "react";
import { useSelector } from "react-redux";

type typesInput = "password" | "email";

interface FieldInputProps {
  name: string;
  type?: typesInput;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
}

export const FieldInput: FC<FieldInputProps> = ({
  name,
  type,
  onChange,
}: FieldInputProps) => {
  const { errorPassword, errorPasswordConfirm, errorEmail } = useSelector(
    (state: any) => state.form
  );

  return (
    <div className="field__input-block">
      <input
        className={`field__input`}
        type={type}
        name={name}
        onChange={onChange}
      />
      {name === "password" && (
        <div style={{ color: "red", fontSize: "12px" }}>{errorPassword}</div>
      )}
      {name === "passwordConfirm" && (
        <div style={{ color: "red", fontSize: "12px" }}>
          {errorPasswordConfirm}
        </div>
      )}
      {name === "email" && (
        <div style={{ color: "red", fontSize: "12px" }}>{errorEmail}</div>
      )}
    </div>
  );
};
