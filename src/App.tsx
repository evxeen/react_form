import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import { Wrapper } from "./components/Wrapper/Wrapper";
import { Header } from "./components/Header/Header";
import { Separator } from "./components/Separator/Separator";
import { Field } from "./components/Field/Field";
import { FieldsWrap } from "./components/FieldWrap/FieldsWrap";
import { fetchCities } from "./store/actions/citiesAction";
import { fetchUniversities } from "./store/actions/universitiesAction";

const App = () => {
  const [city, setCity] = useState("");
  const [university, setUniversity] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [email, setEmail] = useState("");
  const [agreement, setAgreement] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const { cities } = useSelector((state: any) => state.cities);
  const { universities } = useSelector((state: any) => state.universities);

  useEffect(() => {
    dispatch(fetchCities());
    dispatch(fetchUniversities());
  }, []);

  console.log(error);
  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!password.length) {
      setError("Укажите пароль");
      return;
    }

    if (password !== passwordConfirm) {
      setError("Пароли не совпадают");
      return;
    }
    if (password.length < 5) {
      setError("Используйте не менее 5 символов");
      return;
    }

    if (!email.length) {
      setError("Укажите E-mail");

      return;
    }

    console.log(
      JSON.stringify({
        city: city,
        university: university,
        password: password,
        passwordConfirm: passwordConfirm,
        email: email,
        agreement: agreement,
      })
    );
  };

  return (
    <Wrapper>
      <FieldsWrap>
        <Header />
      </FieldsWrap>
      <form onSubmit={submitForm}>
        <FieldsWrap>
          <Field
            label="Ваш город"
            type="select"
            name="city"
            className="field__input"
            select={cities}
            onChange={(e) => setCity(e.target.value)}
          />
          <Field
            label="Ваш университет"
            type="select"
            name="university"
            className="field__input"
            select={universities}
            onChange={(e) => setUniversity(e.target.value)}
          />
        </FieldsWrap>

        <Separator />

        <FieldsWrap>
          <Field
            label="Ваш пароль"
            type="password"
            name="password"
            className="field__input"
            hint="Ваш новый пароль должен содержать не менее 5 символов."
            errorMessage={error}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Field
            label="Пароль еще раз"
            type="password"
            name="passwordConfirm"
            className="field__input"
            hint="Повторите пароль, пожалуйста, это обезопасит вас с нами
на случай ошибки."
            errorMessage={error}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </FieldsWrap>

        <Separator />

        <FieldsWrap>
          <Field
            label="Электронная почта"
            type="email"
            name="passwordConfirm"
            className="field__input"
            hint="Можно изменить адрес, указанный при регистрации. "
            onChange={(e) => setEmail(e.target.value)}
            errorMessage={error}
          />
          <Field
            label="Я согласен"
            type="checkbox"
            name="agreement"
            className="field__checkbox"
            hint="принимать актуальную информацию на емейл"
            onChange={(e) => setAgreement(e.target.value)}
          />
          <Field
            type="submit"
            name="buttonSubmit"
            className="field__button"
            hint="последние изменения 15 мая 2012 в 14:55:17"
          />
        </FieldsWrap>
      </form>
    </Wrapper>
  );
};

export default App;
