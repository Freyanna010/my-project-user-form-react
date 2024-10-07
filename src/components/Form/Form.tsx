import React, { FC, useState } from "react";
import TextField from "../../modules/ui-kit/TextField";
import Button from "../../modules/ui-kit/Button";
import classes from "./Form.module.scss";
import Select from "../../modules/ui-kit/Select";
import {
  FIELD_ERROR_MESSAGE,
  FIELD_ERROR_MESSAGE_EMAIL,
  INITIAL_ERROR,
  INITIAL_FORM_VALUE,
} from "./constants";
import { isEmpty, isValidEmail } from "./validation";
import { FormError, FormValues } from "./Form.type";
import DatePicker from "../../modules/ui-kit/DatePicker";

const Form: FC = () => {
  const [formValue, setFormValue] = useState<FormValues>(INITIAL_FORM_VALUE);
  const [error, setError] = useState<FormError>(INITIAL_ERROR);
  const genderOptions = [
    { value: "male", label: "Мужской" },
    { value: "female", label: "Женский" },
  ];

  const handleChange = (name: keyof typeof formValue, value: string) => {
    setFormValue((prevValue) => ({ ...prevValue, [name]: value }));
    setError(INITIAL_ERROR);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validation = {
      lastName: isEmpty(formValue.lastName),
      firstName: isEmpty(formValue.firstName),
      birthDate: isEmpty(formValue.birthDate),
      phone: isEmpty(formValue.phone),
      email: !isValidEmail(formValue.email),
    };

    setError(validation);

    const hasErrors = Object.values(validation).some((value) => value);

    if (!hasErrors) {
      alert("Форма валидна, отправляется запрос");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <h2>Информация о сотруднике</h2>
      <div className={classes.formGroup}></div>
      <TextField
        name="lastName"
        error={error.lastName && FIELD_ERROR_MESSAGE}
        label="Фамилия"
        onChange={(value: string) => handleChange("lastName", value)}
        type="string"
      />
      <TextField
        name="firstName"
        error={error.firstName && FIELD_ERROR_MESSAGE}
        label="Имя"
        onChange={(value: string) => handleChange("firstName", value)}
        type="string"
      />
      <TextField
        name="fatherName"
        label="Отчество"
        onChange={(value: string) => handleChange("fatherName", value)}
        type="string"
      />
      <div className={classes.shortInputContainer}>
        <Select
          name="gender"
          value={formValue.gender}
          onChange={(value: string) => handleChange("gender", value)}
          options={genderOptions}
          label="Пол"
        />

        <DatePicker
          name="birthDate"
          placeholder="Дата рождения"
          onChange={(date) => handleChange("birthDate", date?.toString())}
          error={error.birthDate && FIELD_ERROR_MESSAGE}
        />
      </div>
      <div className={classes.shortInputContainer}>
        <TextField
          name="email"
          error={error.email && FIELD_ERROR_MESSAGE_EMAIL}
          className="short"
          type="string"
          label="Email (необязательно)"
          onChange={(value: string) => handleChange("email", value)}
          value={formValue.email}
        />
        <TextField
          name="phone"
          error={error.phone && FIELD_ERROR_MESSAGE}
          className="short"
          label="Мобильный телефон"
          onChange={(value: string) => handleChange("phone", value)}
          value={formValue.phone}
          mask="phone"
        />
      </div>
      <TextField
        name="address"
        label="Адрес постоянной регистрации"
        onChange={(value: string) => handleChange("address", value)}
        className="long"
        type="string"
      />
      <TextField
        name="nameEmployer"
        label="Название работодателя"
        onChange={(value: string) => handleChange("address", value)}
        className="long"
        type="string"
      />

      <Button>Сохранить</Button>
    </form>
  );
};

export default Form;
