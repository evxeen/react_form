import React, { FC } from "react";

interface FieldSelectProps {
  data?: string[];
  name?: string;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
}

export const FieldSelect: FC<FieldSelectProps> = ({
  data,
  name,
  onChange,
}: FieldSelectProps) => {
  return (
    <select className="field__input" name={name} onChange={onChange}>
      {data?.map((data) => (
        <option key={data}>{data}</option>
      ))}
    </select>
  );
};
