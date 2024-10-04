import React, { FC, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TextField from "../TextField";
import Button from "../Button";
import classes from "./Form.module.scss";

const Form: FC = () => {
  // TODO: типизировтаь и вынести объект
  const [formValue, setFormValue] = useState<any>({
    lastName: "",
    firstName: "",
    fatherName: "",
    male: "man",
    birthDate: "",
    phone: "",
    email: "",
    address: "",
    nameEmployer: "",
  });
  // TODO:для валидации
  const [error, setError] = useState<boolean | string>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    //TODO:типизировать
    setFormValue((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!error) {
      alert("Форма валидна, отправляется запрос");
      setFormValue(null);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <h2>Информация о сотруднике</h2>
      <TextField
        name={"lastName"}
        error={error && "Поле является обязательным"}
        id={uuidv4()}
        label={"Фамилия"}
        onChange={handleChange}
        // onBlur = {handleBlur}  //TODO:нужен?
        // onFocus = {handleFocus}
        required={true}
        value={formValue.lastName}
        className={"long"}
        placeholder={""}
      />
      <TextField
        name={"firstName"}
        error={error && "Поле является обязательным"}
        id={uuidv4()}
        label={"Имя"}
        onChange={handleChange}
        // onBlur = {handleBlur}
        // onFocus = {handleFocus}
        required={true}
        value={formValue.firstName}
        className={"long"}
        placeholder={""}
      />
      <TextField
        name={"fatherName"}
        id={uuidv4()}
        label={"Отчество"}
        onChange={handleChange}
        // onBlur = {handleBlur}
        // onFocus = {handleFocus}
        required={false}
        value={formValue.fatherName}
        className={"long"}
        placeholder={""}
      />
      <div className={classes.shortInput}>
        <TextField
          name={"male"}
          onChange={handleChange}
          // onBlur = {handleBlur}
          // onFocus = {handleFocus}
          required={false}
          value={formValue.male}
          className={"short"}
        />
        <TextField
          name={"birthDate"}
          error={error && "Поле является обязательным"}
          id={uuidv4()}
          label={"Дата рождения"}
          onChange={handleChange}
          // onBlur = {handleBlur}
          // onFocus = {handleFocus}
          required={true}
          value={formValue.birthDate}
          className={"short"}
          placeholder={""}
        />
      </div>
      <div className={classes.shortInput}>
        <TextField
          name={"phone"}
          error={error && "Поле является обязательным"}
          id={uuidv4()}
          label={"Мобильный телефон"}
          onChange={handleChange}
          // onBlur = {hadleBlur}
          // onFocus = {hadleFocus}
          required={true}
          value={formValue.phone}
          className={"short"}
          placeholder={""}
        />

        <TextField
          name={"email"}
          error={error && "Введен некоректный адрес почты"}
          id={uuidv4()}
          label={"Email (необязательно)"}
          onChange={handleChange}
          // onBlur = {handleBlur}
          // onFocus = {handleFocus}
          required={true}
          value={formValue.email}
          className={"short"}
          placeholder={""}
        />
      </div>

      <TextField
        name={"address"}
        id={uuidv4()}
        label={"Адрес постоянной регистрации"}
        onChange={handleChange}
        // onBlur = {handleBlur}
        // onFocus = {handleFocus}
        required={false}
        value={formValue.address}
        className={"long"}
        placeholder={""}
      />
      <TextField
        name={"nameEmployer"}
        id={uuidv4()}
        label={"Название работодателя"}
        onChange={handleChange}
        // onBlur = {handleBlur}
        // onFocus = {handleFocus}
        required={false}
        value={formValue.nameEmployer}
        className={"long"}
        placeholder={""}
      />
      <Button type={"submit"}>Сохранить</Button>
    </form>
  );
};

export default Form;
