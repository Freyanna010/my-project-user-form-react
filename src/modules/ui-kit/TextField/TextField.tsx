import React, { FC } from "react";
import { TextFieldProps } from "./TextField.types";
import classes from "./TextField.module.scss";
import clsx from "clsx";

const TextField: FC<TextFieldProps> = ({ ...props }) => {
  return (
    <div className={clsx(classes.inputContainer, classes[props.className])}>
      <input {...props} className={props.error ? classes.errorInput : ""} />
      {props.label && <label htmlFor={props.id}>{props.label}</label>}
      {props.error && <p className={classes.error}>{props.error}</p>}
    </div>
  );
};

export default TextField;
