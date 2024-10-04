import React, { FC, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TextField from "../../modules/ui-kit/TextField";
import Button from "../../modules/ui-kit/Button";
import classes from "./Form.module.scss";
import SelectBox from "../../modules/ui-kit/SelectBox";
import InputMask from "react-input-mask";
import { InputProps } from 'react-input-mask'

const Form: FC = () => {
  // TODO: типизировтаь и вынести объект
  const [formValue, setFormValue] = useState<any>({
    lastName: "",
    firstName: "",
    fatherName: "",
    gender: "man",
    birthDate: "",
    phone: "",
    email: "",
    address: "",
    nameEmployer: "",
  });
  // TODO:для валидации
  const [error, setError] = useState<boolean | string>(false);
  const genderOptions = [
    { value: "Мужской", label: "Мужской" },
    { value: "Женский", label: "Женский" },
  ];

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
        type={"string"}
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
        type={"string"}
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
        type={"string"}
      />
      <div className={classes.shortInput}>
        <SelectBox
          name="gender"
          value={formValue.gender}
          onChange={handleChange}
          options={genderOptions}
          label="Пол"
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
          type={"number"}
        />
      </div>

      <div className={classes.shortInput}>
        {/* <TextField
          name="phone"
          id={uuidv4()}
          label="Мобильный телефон"
          className="short"
          placeholder=""
          type="tel"
        /> */}
        <InputMask
          mask="+7 (999) 999-99-99"
          value={formValue.phone}
          onChange={handleChange}
        >
          {(inputProps: InputProps) => (
            <TextField
              name="phone"
              id={uuidv4()}
              label="Мобильный телефон"
              className="short"
              placeholder=""
              type="tel"
            />
          )}
        </InputMask>

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
          type={"string"}
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
        type={"string"}
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
        type={"string"}
      />
      <Button>Сохранить</Button>
    </form>
  );
};

export default Form;
