import { css } from "@emotion/react";
import styled from "@emotion/styled";

const buttonSecondary = css`
  background-color: yellowgreen;
  font-size: 24px;
`;

const buttonDefault = css`
  background-color: rgb(86, 56, 223);
  font-size: 24px;
`;

const CustomSize = (props) => {
  console.log("props styled", props);
  if (props.size === "small") {
    return buttonDefault;
  }
  return buttonSecondary;
};

export const CustomButton = styled.button`
  ${CustomSize}
  display: inline-flex;
  margin: 0 4px;
  padding: 8px 24px;
  border: 0;
  border-radius: 2px;
  color: red;
  font-size: ${(props) => (props.size === "small" ? "14px" : "25px")};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;
