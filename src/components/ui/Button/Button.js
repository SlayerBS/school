import React from "react";
// import styles from "./Button.module.css";
import { CustomButton } from "./Button.styles";

// const currentColor = {
//   Secondary: styles.ButtonSecondary,
//   Default: styles.ButtonDefault,
// };

export const Button = ({ name, buttonColor }) => (
  <CustomButton size="small"> {name}</CustomButton>
);
