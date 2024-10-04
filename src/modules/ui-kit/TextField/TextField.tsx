import React, { FC } from "react";
import { TextFieldProps } from "./TextFieldType";
import classes from "./TextField.module.scss";

const TextField: FC<TextFieldProps> = ({ ...props }) => {
  return (
    <div className={`${classes.inputContainer} ${classes[props.className]}`}>
      <input {...props} className={props.error ? classes.errorInput : ""} />
      {props.label && <label htmlFor={props.id}>{props.label}</label>}
      {props.error && <p className={classes.error}>{props.error}</p>}
    </div>
  );
};

export default TextField;
