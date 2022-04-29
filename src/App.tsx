import React, { useEffect, useState } from "react";
import "./App.scss";
import { Wrapper } from "./components/Wrapper/Wrapper";
import { Header } from "./components/Header/Header";
import { FieldsWrap } from "./components/FieldWrap/FieldsWrap";
import { Form } from "./components/Form/From";

const UseValidation = (value: string, validations: any) => {
  const [isEmpty, setEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "minLength":
          value.length < validations[validation]
            ? setMinLengthError(true)
            : setMinLengthError(false);
          break;

        case "isEmpty":
          value ? setEmpty(false) : setEmpty(true);
          break;
      }
    }
  }, [value]);

  return { isEmpty, minLengthError };
};

const UseInput = (initialValue: string, validations: object) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(false);
  const valid = UseValidation(value, validations);
  const onBlur = (e: any) => {
    setDirty(true);
  };
  const onChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setValue(e.target.value);
  };

  return { value, onChange, onBlur, isDirty, ...valid };
};

const App = () => {
  const [error, setError] = useState("");

  const password = UseInput("", { isEmpty: true, minLength: 5 });
  const email = UseInput("", { isEmpty: true, minLength: 1 });

  return (
    <Wrapper>
      <FieldsWrap>
        <Header />
      </FieldsWrap>
      <Form />
    </Wrapper>
  );
};

export default App;
