import React, { FC } from "react";
import classes from "./SelectBox.module.scss";
import { SelectBoxProps } from "./SelectBox.types";

const SelectBox: FC<SelectBoxProps> = ({
  name,
  value,
  onChange,
  options,
  label,
}) => {
  return (
    <div className={classes.selectBox}>
      <label htmlFor={name}>{label}:</label>
      <select name={name} value={value} onChange={onChange}>
        <option value="" disabled>
          {label}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectBox;
