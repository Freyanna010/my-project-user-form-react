import { ConfigProvider } from "antd";
import React, { FC } from "react";
import { DatePickerProps } from "./DatePicker.types";
import { DatePicker as AntdDatePicker } from 'antd';
import classes from './DatePicker.module.scss';
import clsx from "clsx";

const DatePicker: FC<DatePickerProps> = (props) => {
  const { name, className, onChange, placeholder, value, error } = props;

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#44b766",
          colorBgContainer: "#f0f0f0",
        },
        components: {
          DatePicker: {
            colorTextPlaceholder: "#999",
          },
        },
      }}
    >
      <div className={classes.component}>
        <AntdDatePicker
          allowClear={false}
          className={clsx(classes.datePicker, className)}
          format="DD.MM.YYYY"
          name={name}
          value={value}
          popupClassName={classes.datePickerPopup}
          placeholder={placeholder}
          onChange={(date) => onChange?.(date?.toString())}
        />
        {error && <div className={classes.errorMessage}>{error}</div>}
      </div>
    </ConfigProvider>
  );
};

export default DatePicker;
