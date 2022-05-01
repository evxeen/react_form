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
    dispatch({ type: `SET_${name}`, payload: e.target.value });
  };

  return <div className="field__input-block"></div>;
};
