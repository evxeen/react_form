import React from "react";
import "./App.scss";
import { Wrapper } from "./components/Wrapper";
import { Header } from "./components/Header";
import { Separator } from "./components/Separator";
import { Field } from "./components/Field";
import { SaveChanges } from "./components/SaveChanges";
import { FieldsWrap } from "./components/FieldsWrap";

const App = () => {
  const cities = ["lala", "baba", "jojo", "wowq"];
  const universities = ["BGU", "NGTL", "QWSDD", "::FKFO"];

  const forms = [
    { text: "Ваш город", selects: cities },
    { text: "Ваш город", selects: universities },
    {
      text: "Пароль",
      type: true,
      hint: "Ваш новый пароль должен содержать не менее 5 символов.",
    },
    {
      text: "Пароль еще раз",
      type: true,
      hint: "Повторите пароль, пожалуйста, это обезопасит вас с нами",
    },
    {
      text: "Электронная почта",
      type: true,
      hint: "Можно изменить адрес, указанный при регистрации.",
    },
    {
      text: "Я согласен",
      label: "принимать актуальную информацию на емейл",
    },
  ];

  const submitForm = (event: React.SyntheticEvent) => {
    event.preventDefault();
  };

  return (
    <Wrapper>
      <FieldsWrap>
        <Header />
      </FieldsWrap>
      <form onSubmit={submitForm}>
        {forms.map((form, index) => (
          <Field
            key={index}
            text={form.text}
            selects={form.selects}
            type={form.type}
            hint={form.hint}
            label={form.label}
          />
        ))}
        {/*        <FieldsWrap>*/}
        {/*          <Field text="Ваш город" selects={cities} />*/}
        {/*          <Field text="Ваш университет" selects={universities} />*/}
        {/*        </FieldsWrap>*/}

        {/*        <Separator />*/}
        {/*        <FieldsWrap>*/}
        {/*          <Field*/}
        {/*            text="Пароль"*/}
        {/*            type={true}*/}
        {/*            hint="Ваш новый пароль должен содержать не менее 5 символов."*/}
        {/*          />*/}
        {/*          <Field*/}
        {/*            text="Пароль еще раз"*/}
        {/*            type={true}*/}
        {/*            hint="Повторите пароль, пожалуйста, это обезопасит вас с нами*/}
        {/*на случай ошибки."*/}
        {/*          />*/}
        {/*        </FieldsWrap>*/}

        {/*        <Separator />*/}

        {/*        <FieldsWrap>*/}
        {/*          <Field*/}
        {/*            text="Электронная почта"*/}
        {/*            type={true}*/}
        {/*            hint="Можно изменить адрес, указанный при регистрации. "*/}
        {/*          />*/}
        {/*          <Field*/}
        {/*            text="Я согласен"*/}
        {/*            label="принимать актуальную информацию на емейл"*/}
        {/*          />*/}
        {/*          <SaveChanges />*/}
        {/*        </FieldsWrap>*/}
        <SaveChanges />
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
