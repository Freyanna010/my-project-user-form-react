import React, { FC} from "react";
import  classes from "./Datе.module.scss";
import { DateProps } from "./Date.types";
import { DatePicker } from "antd";

const Date: FC<DateProps>  = ({ onChange }) => {
  
  return (
    <div className={classes.customDatePicker} >
    <DatePicker      
      onChange={onChange} 
    />
  </div>
  );
};

export default Date;
