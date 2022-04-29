import React, { FC, useEffect } from "react";

import { Field } from "../Field/Field";
import { Separator } from "../Separator/Separator";
import { FieldsWrap } from "../FieldWrap/FieldsWrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchCities } from "../../store/actions/citiesAction";
import { fetchUniversities } from "../../store/actions/universitiesAction";

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
    for (const field in dataForm) {
      if (field.length === 0) {
        console.log("есть незаполненные поля");
      } else {
        console.log("все поля заполнены");
      }
    }

    console.log(JSON.stringify(dataForm));
  };

  return (
    <form onSubmit={onSubmit}>
      <FieldsWrap>
        <Field text="Ваш город" typeInput="select" data={cities} name="city" />
        <Field
          text="Ваш университет"
          typeInput="select"
          data={universities}
          name="university"
        />
      </FieldsWrap>

      <Separator />

      <FieldsWrap>
        <Field
          text="Ваш пароль"
          typeInput="password"
          hint="Ваш новый пароль должен содержать не менее 5 символов."
          name="password"
        />
        <Field
          text="Пароль еще раз"
          typeInput="password"
          hint="Повторите пароль, пожалуйста, это обезопасит вас с нами
на случай ошибки."
          name="passwordconfirm"
        />
      </FieldsWrap>

      <Separator />

      <FieldsWrap>
        <Field
          text="Электронная почта"
          typeInput="email"
          hint="Можно изменить адрес, указанный при регистрации. "
          name="email"
        />
        <Field
          text="Я согласен"
          typeInput="checkbox"
          hint="принимать актуальную информацию на емейл"
          name="agreement"
        />
        <Field
          typeInput="button"
          hint="последние изменения 15 мая 2012 в 14:55:17"
        />
      </FieldsWrap>
    </form>
  );
};
