import React from "react";
import styles from "./Button.module.css";

const currentColor = {
  Secondary: styles.ButtonSecondary,
  Default: styles.ButtonDefault,
};

export const Button = ({ name, buttonColor }) => (
  <button className={[styles.Button, currentColor[buttonColor]].join(" ")}>
    {name}
  </button>
);
