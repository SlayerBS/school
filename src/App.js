import { StaffMenu } from "./components/StaffMenu/StaffMenu";
import { Wrapper } from "./components/Wrapper/Wrapper";
import React from "react";
import { Button } from "@material-ui/core";
import { Form } from "./components/Form/Form";

const cityes = [
  { name: "Киев", id: "ffhjhjgfgf" },
  { name: "Лондон", id: "dlsdklk" },
];

const App = () => {
  const getCurrentFormData = (data) => {
    console.log("data", data);
  };
  return (
    <Wrapper>
      <div>
        <Button
          onClick={() => console.log("Click")}
          variant="contained"
          color="primary"
        >
          Hello
        </Button>
      </div>
      <Form onSubmit={getCurrentFormData} />
      {/* <StaffMenu title="Преподаватели" buttonName="Добавить преподавателя" /> */}
      <StaffMenu title="Города" buttonName="Добавить город" content={cityes} />
      {/* <StaffMenu title="Факультеты" buttonName="Добавить факультет" /> */}
    </Wrapper>
  );
};

export default App;
