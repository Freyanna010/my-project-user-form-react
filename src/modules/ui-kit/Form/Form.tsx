import { FC, useState } from "react";

import { v4 as uuidv4 } from "uuid";
import TextField from "../TextField";
import Button from "../Button";

const Form: FC = () => {
  // TODO: здесь должен быть обьект со всеми полями ввода?
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

  const [error, setError] = useState<boolean | string>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
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
    <form onSubmit={handleSubmit}>
      <TextField
        name={"lastName"}
        error={error && "Поле является обязательным"}
        id={uuidv4()}
        label={"Фамилия"}
        // labelPosition={"top"} //TODO: ругается на название
        onChange={handleChange}
        // onBlur = {hadleBlur}  //TODO: пыталась логику перемещения сделать через стили
        // onFocus = {hadleFocus}
        required={true}
        placeholder={formValue.lastName}
        className={"long"}
      />
      <TextField
        name={"FirstName"}
        error={error && "Поле является обязательным"}
        id={uuidv4()}
        label={"Имя"}
        // labelPosition={"top"}
        onChange={handleChange}
        // onBlur = {hadleBlur}
        // onFocus = {hadleFocus}
        required={true}
        placeholder={formValue.firstName}
        className={"long"}
      />
      <TextField
        name={"fatherName"}
        id={uuidv4()}
        label={"Отчество"}
        // labelPosition={"top"}
        onChange={handleChange}
        // onBlur = {hadleBlur}
        // onFocus = {hadleFocus}
        required={false}
        placeholder={formValue.fatherName}
        className={"long"}
      />
      <TextField
        name={"male"}
        // labelPosition={"top"}
        onChange={handleChange}
        // onBlur = {hadleBlur}
        // onFocus = {hadleFocus}
        required={false}
        placeholder={formValue.male}
        className={"short"}
      />
      <TextField
        name={"birthDate"}
        error={error && "Поле является обязательным"}
        id={uuidv4()}
        label={"Дата рождения"}
        // labelPosition={"top"}
        onChange={handleChange}
        // onBlur = {hadleBlur}
        // onFocus = {hadleFocus}
        required={true}
        placeholder={formValue.birthDate}
        className={"short"}
      />
      <TextField
        name={"phone"}
        error={error && "Поле является обязательным"}
        id={uuidv4()}
        label={"Мобильный телефон"}
        // labelPosition={"top"}
        onChange={handleChange}
        // onBlur = {hadleBlur}
        // onFocus = {hadleFocus}
        required={true}
        placeholder={formValue.phone}
        className={"short"}
      />

      <TextField
        name={"email"}
        error={error && "Введен некоректный адрес почты"}
        id={uuidv4()}
        label={"Email(необязательно)"}
        // labelPosition={"top"}
        onChange={handleChange}
        // onBlur = {hadleBlur}
        // onFocus = {hadleFocus}
        required={true}
        placeholder={formValue.email}
        className={"short"}
      />
      <TextField
        name={"address"}
        id={uuidv4()}
        label={"Адрес постоянной регистрации"}
        // labelPosition={"top"}
        onChange={handleChange}
        // onBlur = {hadleBlur}
        // onFocus = {hadleFocus}
        required={false}
        placeholder={formValue.address}
        className={"long"}
      />
      <TextField
        name={"nameEmployer"}
        id={uuidv4()}
        label={"Название работодателя"}
        // labelPosition={"top"}
        onChange={handleChange}
        // onBlur = {hadleBlur}
        // onFocus = {hadleFocus}
        required={false}
        placeholder={formValue.nameEmployer}
        className={"long"}
      />
{/* TODO:не покрасилась */}
      <Button type={"submit"} className={"primary"}> 
        Сохранить
      </Button>
    </form>
  );
};

export default Form;
