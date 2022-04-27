import React, { useState } from "react";
import "./App.scss";
import { Wrapper } from "./components/Wrapper/Wrapper";
import { Header } from "./components/Header/Header";
import { Separator } from "./components/Separator/Separator";
import { Field } from "./components/Field/Field";
import { SaveChanges } from "./components/SaveChanges";
import { FieldsWrap } from "./components/FieldWrap/FieldsWrap";

const App = () => {
  const cities = ["lala", "baba", "jojo", "wowq"];
  const universities = ["BGU", "NGTL", "QWSDD", ":FKFO"];

  const [city, setCity] = useState("");
  const [university, setUniversity] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [agreement, setAgreement] = useState(false);

  console.log({
    city: city,
    university: university,
    password: password,
    passwordConfirm: passwordConfirm,
    email: emailInput,
  });

  return (
    <Wrapper>
      <FieldsWrap>
        <Header />
      </FieldsWrap>
      <form>
        <FieldsWrap>
          <Field
            label="Ваш город"
            className="field__input"
            name="inputCity"
            type="text"
            id="city"
            select={cities}
            onChange={(e) => setCity(e.target.value)}
          />
          <Field
            label="Ваш университет"
            name="inputUniversity"
            className="field__input"
            type="text"
            id="university"
            select={universities}
            onChange={(e) => setUniversity(e.target.value)}
          />
        </FieldsWrap>

        <Separator />
        <FieldsWrap>
          <Field
            name="inputPassword"
            label="Пароль"
            className="field__input"
            type="password"
            id="password"
            hint="Ваш новый пароль должен содержать не менее 5 символов."
            onChange={(e) => setPassword(e.target.value)}
          />
          <Field
            name="password"
            label="Пароль еще раз"
            className="field__input"
            type="password"
            id="passwordConfirm"
            hint="Повторите пароль, пожалуйста, это обезопасит вас с нами
        на случай ошибки."
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </FieldsWrap>

        <Separator />

        <FieldsWrap>
          <Field
            name="email"
            label="Электронная почта"
            id="email"
            type="email"
            hint="Можно изменить адрес, указанный при регистрации. "
            className="field__input"
            onChange={(e) => setEmailInput(e.target.value)}
          />
          <Field
            name="checkbox"
            label="Я согласен"
            id="checkbox"
            type="checkbox"
            className="field__checkbox"
            // onChange={(e) => setCity(e.target.value)}
          />
          <Field
            name="button"
            id="button-submit"
            type="submit"
            hint="последние изменения 15 мая 2012 в 14:55:17"
            className=" save-changes__button"
          />
          {/*<SaveChanges />*/}
        </FieldsWrap>
      </form>
    </Wrapper>
  );
};

export default App;

// <div className="field">
//   <p className="field__text">Ваш город</p>
//   <select className="field__input" name="select">
//     {cities.map((opt) => (
//       <option key={opt} value="value1">
//         {opt}
//       </option>
//     ))}
//   </select>
// </div>
//
// <div className="field">
//   <p className="field__text">Ваш университет</p>
//   <select className="field__input" name="select">
//     {universities.map((university) => (
//       <option key={university} value="value1">
//         {university}
//       </option>
//     ))}
//   </select>
// </div>
//
// <Separator />
//
// <div className="field">
//   <p className="field__text">Пароль</p>
//   <input className="field__input" type="text" />
//   <div className="field__hint">
//     Можно изменить адрес, указанный при регистрации.
//   </div>
// </div>
//
// <div className="field">
//   <p className="field__text">Пароль еще раз</p>
//   <input className="field__input" type="text" />
//   <div className="field__hint">
//     Можно изменить адрес, указанный при регистрации.
//   </div>
// </div>
//
// <Separator />
//
// <div className="field">
//   <p className="field__text">Электронная почта</p>
//   <input className="field__input" type="text" />
//   <div className="field__hint">
//     Можно изменить адрес, указанный при регистрации.
//   </div>
// </div>
//
// <div className="field">
//   <p className="field__text"></p>
//   <button className="save-changes__button">Изменить</button>
//   <span className="save-changes__text">
//             последние изменения 15 мая 2012 в 14:55:17
//           </span>
// </div>
