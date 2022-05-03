import "./App.scss";
import { Wrapper } from "./components/Wrapper/Wrapper";
import { Header } from "./components/Header/Header";
import { FieldsWrap } from "./components/FieldWrap/FieldsWrap";
import { Form } from "./components/Form/From";

const App = () => {
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
