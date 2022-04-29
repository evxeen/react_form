import React, { ChangeEvent, FC, useEffect, useState } from "react";
import "./FieldInputBlock.scss";
import { useDispatch, useSelector } from "react-redux";

interface FieldInputBlockProps {
  typeInput: string;
  data?: string[];
  name?: string;
}

export const FieldInputBlock: FC<FieldInputBlockProps> = ({
  typeInput,
  data,
  name,
}: FieldInputBlockProps) => {
  const form = useSelector((state: any) => state.form);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch({type: 'SET_CITY', payload: })
  }, []);

  const changeInputHandler = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    const name = e.target.name.toUpperCase();
    console.log(e.target.name);
    dispatch({ type: `SET_${name}`, payload: e.target.value });
  };
  return (
    <div className="field__input-block">
      {data && (
        <select
          className="field__input"
          name={name}
          onChange={changeInputHandler}
        >
          {data.map((el, index) => (
            <option key={index}>{el}</option>
          ))}
        </select>
      )}

      {!data && typeInput !== "button" && (
        <input
          className={`field__input ${typeInput}`}
          type={typeInput}
          onChange={changeInputHandler}
          name={name}
        />
      )}

      {!data && typeInput === "button" && (
        <button className={`field__input button`}>Изменить</button>
      )}

      <div
        className="field__error-text"
        style={{ color: "red", fontSize: "12px" }}
      >
        {/*поле не может быть пустым*/}
      </div>
    </div>
  );
};
