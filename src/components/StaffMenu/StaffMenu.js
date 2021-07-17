import React from "react";
import { Button } from "../ui/Button/Button";
import { Item } from "../ui/Item/Item";

export const StaffMenu = ({ content, title, buttonName }) => {
  return (
    <div>
      <h2>{title}</h2>
      {content?.map((city) => (
        <Item key={city.id} text={city.name} />
      ))}
      <Button name={buttonName} buttonColor="Default" />
    </div>
  );
};
