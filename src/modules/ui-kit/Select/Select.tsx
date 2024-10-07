import React, { FC, useEffect, useRef, useState } from "react";
import { Option, SelectProps } from "./Select.types";
import TopBottomArrow from "../../icons/TopBottomArrow";
import classes from "./Select.module.scss";

const Select: FC<SelectProps> = ({ options, label, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const handleSelect = (option: Option) => {
    onChange?.(option.value);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      selectRef.current &&
      !selectRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={classes.component} ref={selectRef}>
      <label className={classes.label}>{label}</label>
      <div
        className={classes.select}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className={classes.value}>
          {options.find((option) => option.value === value)?.label}
        </span>
        <TopBottomArrow />
      </div>
      {isOpen && (
        <ul className={classes.options}>
          {options.map((option) => (
            <li key={option.value} onClick={() => handleSelect(option)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
