import React, { FC } from "react";
import { ButtonProps } from "./Button.types";
import classes from "./Button.module.scss";

const Button: FC<ButtonProps> = ({ children }, props) => (
    <button type={props.type} className={classes.button}>
      {children}
    </button>
  );

export default Button;
