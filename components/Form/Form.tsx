import React, { FC, useState } from "react";
import TextField from "../../modules/ui-kit/TextField";
import Button from "../../modules/ui-kit/Button";
import classes from "./Form.module.scss";
import Select from "../../modules/ui-kit/Select";
import { FIELD_ERROR_MESSAGE } from "./constants";
import { isValidEmail, isValidTextField } from "./validation";
import { initialValue } from "./initialForm";

const Form: FC = () => {
  const [formValue, setFormValue] = useState(initialValue);
  const [error, setError] = useState(false);
  const genderOptions = [
    { value: "male", label: "Мужской" },
    { value: "female", label: "Женский" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValue((prevValue) => ({ ...prevValue, [name]: value }));
    if (error) setError(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValidEmail(formValue.email) && isValidTextField(formValue)) {
      alert("Форма валидна, отправляется запрос");
    } else {
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <h2>Информация о сотруднике</h2>
      <div className={classes.formGroup}></div>
      <TextField
        name="lastName"
        error={error && FIELD_ERROR_MESSAGE}
        label="Фамилия"
        onChange={handleChange}
        value={formValue.lastName}
        type="string"
      />
      <TextField
        name="firstName"
        error={error && FIELD_ERROR_MESSAGE}
        label="Имя"
        onChange={handleChange}
        value={formValue.firstName}
        type="string"
      />
      <TextField
        name="fatherName"
        label="Отчество"
        onChange={handleChange}
        value={formValue.fatherName}
        type="string"
      />
      <div className={classes.shortInput}>
        <Select
          name="gender"
          value="male"
          onChange={handleChange}
          options={genderOptions}
          label="Пол"
        />
        <TextField
          name="birthDate"
          error={error && FIELD_ERROR_MESSAGE}
          label="Дата рождения"
          onChange={handleChange}
          value={formValue.birthDate}
          className="short"
          type="number"
        />
      </div>

      <div className={classes.shortInput}>
        <TextField
          name="email"
          error={error && "Введен некоректный адрес почты"}
          label="Email (необязательно)"
          onChange={handleChange}
          value={formValue.email}
          className="short"
          type="string"
        />
        <TextField
          name="address"
          label="Адрес постоянной регистрации"
          onChange={handleChange}
          value={formValue.address}
          className="long"
          type="string"
        />
      </div>

      <TextField
        name="nameEmployer"
        label="Название работодателя"
        onChange={handleChange}
        value={formValue.nameEmployer}
        className="long"
        type="string"
      />
      <Button>Сохранить</Button>
    </form>
  );
};

export default Form;
