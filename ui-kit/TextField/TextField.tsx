import { FC } from "react";
import { TextFieldProps } from "./TextFieldType";
import classes from "./TextField.module.scss";

const TextField: FC<TextFieldProps> = ({ ...props }) => {
  return (
    <div className={`${classes.inputContainer} ${classes[props.className]}`}>
      {props.label && <label htmlFor={props.id}>{props.label}</label>}
      <input {...props }
      className= {props.error ? classes.errorInput : "" }/>
      {props.error && <p className={classes.error}>{  props.error}</p>}
    </div>
  );
};

export default TextField;
