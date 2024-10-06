import React, { FC, useEffect, useRef, useState } from "react";
import classes from "./DataPicker.module.module.scss";
import { DataPickerProps } from "./DataPicker.types";

const Select: FC<DataPickerProps>  = () => {
  
  return (
    <div >
      <DatePicker        
        onChange={onChange}
        className={classes.datePicker} 
      />
    </div>
  );
};

export default Select;
