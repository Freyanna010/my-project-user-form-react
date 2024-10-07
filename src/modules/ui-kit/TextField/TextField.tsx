import React, { FC } from "react";
import { TextFieldProps } from "./TextField.types";
import classes from "./TextField.module.scss";
import clsx from "clsx";
import { useMask } from "@react-input/mask";

const TextField: FC<TextFieldProps> = (props) => {
  const {
    error,
    id,
    label,
    className,
    onChange,
    value,
    mask,
    ...otherInputProps
  } = props;

  let inputMask;

  const phoneMask = useMask({
    mask: "+7 (___) ___-__-__",
    replacement: { _: /\d/ },
  });
  const dateMask = useMask({ mask: "__.__.____", replacement: { _: /\d/ } });

  switch (mask) {
    case "phone":
      inputMask = phoneMask;
      break;
    case "date":
      inputMask = dateMask;
      break;
  }

  return (
    <div className={clsx(classes.component, className)}>
      <input
        ref={inputMask}
        className={clsx(classes.input, error && classes.input_error)}
        onChange={(event) => onChange?.(event.target.value)}
        value={value}
        placeholder=""
        {...otherInputProps}
      />
      {label && (
        <label htmlFor={id} className={classes.label}>
          {label}
        </label>
      )}
      {error && <div className={classes.errorMessage}>{error}</div>}
    </div>
  );
};

export default TextField;
