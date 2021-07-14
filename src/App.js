import { StaffMenu } from "./components/StaffMenu/StaffMenu";
import { Wrapper } from "./components/Wrapper/Wrapper";
const cityes = [
  { name: "Киев", id: "ffhjhjgfgf" },
  { name: "Лондон", id: "dlsdklk" },
];

const App = () => {
  return (
    <Wrapper>
      {/* <StaffMenu title="Преподаватели" buttonName="Добавить преподавателя" /> */}
      <StaffMenu title="Города" buttonName="Добавить город" content={cityes} />
      {/* <StaffMenu title="Факультеты" buttonName="Добавить факультет" /> */}
    </Wrapper>
  );
};

export default App;
