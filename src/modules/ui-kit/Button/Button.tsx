import React, { FC } from "react";
import { ButtonProps } from "./ButtonType";
import classes from "./Button.module.scss";

const Button: FC<ButtonProps> = ({ children }, props) => {
  return (
    <button type={props.type} className={classes[props.className]}>
      <p>{children}</p>
    </button>
  );
};

export default Button;
