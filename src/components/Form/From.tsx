import React, { ChangeEvent, FC, useEffect } from "react";

import { Field } from "../Field/Field";
import { Separator } from "../Separator/Separator";
import { FieldsWrap } from "../FieldWrap/FieldsWrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchCities } from "../../store/actions/citiesAction";
import { fetchUniversities } from "../../store/actions/universitiesAction";
import { FieldText } from "../FieldText/FieldText";
import { FieldSelect } from "../FieldSelect/FieldSelect";
import { FieldHint } from "../FieldHint/FieldHint";
import { FieldInput } from "../FieldInput/FieldInput";
import { FieldCheckbox } from "../FiledCheckbox/FieldCheckbox";
import { Button } from "../Button/Button";

interface FormProps {}
export const Form: FC<FormProps> = () => {
  const dispatch = useDispatch();
  const { cities } = useSelector((state: any) => state.cities);
  const { universities } = useSelector((state: any) => state.universities);
  const dataForm = useSelector((state: any) => state.form);

  useEffect(() => {
    dispatch(fetchCities());
    dispatch(fetchUniversities());
  }, []);

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (!dataForm.password && !dataForm.passwordConfirm) {
      dispatch({ type: "SET_ERROR_PASSWORD", payload: "Укажите пароль" });
      return;
    } else {
      dispatch({ type: "SET_ERROR_PASSWORD", payload: "" });
    }
    if (dataForm.password.length < 5) {
      dispatch({
        type: "SET_ERROR_PASSWORD",
        payload: "Используйте не менее 5 символов",
      });
      return;
    } else {
      dispatch({ type: "SET_ERROR_PASSWORD", payload: "" });
    }
    if (dataForm.passwordConfirm !== dataForm.password) {
      dispatch({
        type: "SET_ERROR_PASSWORDCONFIRM",
        payload: "Пароли не совпадают",
      });
      return;
    } else {
      dispatch({
        type: "SET_ERROR_PASSWORDCONFIRM",
        payload: "",
      });
    }

    const emailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!dataForm.email.match(emailValid)) {
      dispatch({
        type: "SET_ERROR_EMAIL",
        payload: "Неверный E-mail",
      });
      return;
    } else {
      dispatch({
        type: "SET_ERROR_EMAIL",
        payload: "",
      });
    }

    console.log(JSON.stringify(dataForm));
  };

  const changeInputHandler = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    const name = e.target.name.toUpperCase();
    dispatch({ type: `SET_${name}`, payload: e.target.value });
  };

  return (
    <form onSubmit={onSubmit}>
      <FieldsWrap>
        <Field>
          <FieldText text="Ваш город" />
          <FieldSelect
            data={cities}
            name="city"
            onChange={changeInputHandler}
          />
        </Field>
        <Field>
          <FieldText text="Ваш университет " />
          <FieldSelect
            data={universities}
            name="university"
            onChange={changeInputHandler}
          />
        </Field>
      </FieldsWrap>

      <Separator />
      <FieldsWrap>
        <Field>
          <FieldText text="Пароль" />
          <FieldInput
            name="password"
            type="password"
            onChange={changeInputHandler}
          />
          <FieldHint hint="Ваш новый пароль должен содержать не менее 5 символов." />
        </Field>
        <Field>
          <FieldText text="Пароль еще раз" />
          <FieldInput
            name="passwordConfirm"
            type="password"
            onChange={changeInputHandler}
          />
          <FieldHint
            hint="Повторите пароль, пожалуйста, это обезопасит вас с нами
на случай ошибки."
          />
        </Field>
      </FieldsWrap>

      <Separator />
      <FieldsWrap>
        <Field>
          <FieldText text="Электронная почта" />
          <FieldInput name="email" onChange={changeInputHandler} />
          <FieldHint hint="Можно изменить адрес, указанный при регистрации." />
        </Field>
        <Field>
          <FieldText text="Я согласен" />
          <FieldCheckbox />
        </Field>
        <Field>
          <FieldText />
          <Button />
          <FieldHint hint="последние изменения 15 мая 2012 в 14:55:17" />
        </Field>
      </FieldsWrap>
    </form>
  );
};
