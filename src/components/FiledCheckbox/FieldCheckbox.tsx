import React, { FC } from "react";
import "./FieldCheckbox.scss";

interface FieldCheckboxProps {
  name?: string;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
}

export const FieldCheckbox: FC<FieldCheckboxProps> = ({
  name,
  onChange,
}: FieldCheckboxProps) => {
  return (
    <label>
      <input
        type="checkbox"
        className="field__checkbox"
        name={name}
        onChange={onChange}
      />
      принимать актуальную информацию на емейл
    </label>
  );
};
