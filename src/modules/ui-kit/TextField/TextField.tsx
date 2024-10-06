import React, { FC } from "react";
import { TextFieldProps } from "./TextField.types";
import classes from "./TextField.module.scss";
import clsx from "clsx";

const TextField: FC<TextFieldProps> = (props) => {
  const {
    error,
    id,
    label,
    className,
    onChange,
    value,
    name,
    ...otherInputProps
  } = props;

  return (
    
    <div className={clsx(classes.component, className)}>
      <input
        className={clsx(classes.input, error && classes.input_error)}
        onChange={(event) => onChange?.(name, event.target.value)}
        value={value}
        placeholder=""
        {...otherInputProps}
      />
      {label && <label htmlFor={id} className={classes.label}>{label}</label>}
      {error && <div className={classes.errorMessage}>{error}</div>}
    </div>
  );
};

export default TextField;
