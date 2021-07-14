import { StaffMenu } from "./components/StaffMenu/StaffMenu";

const cityes = [
  { name: "Киев", id: "ffhjhjgfgf" },
  { name: "Лондон", id: "dlsdklk" },
];

const App = () => {
  return (
    <>
      {/* <StaffMenu title="Преподаватели" buttonName="Добавить преподавателя" /> */}
      <StaffMenu title="Города" buttonName="Добавить город" content={cityes} />
      {/* <StaffMenu title="Факультеты" buttonName="Добавить факультет" /> */}
    </>
  );
};

export default App;
