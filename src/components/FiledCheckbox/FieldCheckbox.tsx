import React from "react";
import "./FieldCheckbox.scss";

export const FieldCheckbox = () => {
  return (
    <label>
      <input type="checkbox" className="field__checkbox" />
      принимать актуальную информацию на емейл
    </label>
  );
};
