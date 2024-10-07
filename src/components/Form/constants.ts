export const FIELD_ERROR_MESSAGE = "Поле является обязательным";
export const FIELD_ERROR_MESSAGE_EMAIL = "Введен некорректный адрес почты";
export const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export const INITIAL_FORM_VALUE = {
  lastName: "",
  firstName: "",
  fatherName: "",
  gender: "male",
  birthDate: "",
  phone: "",
  email: "",
  address: "",
  nameEmployer: "",
};

export const INITIAL_ERROR = {
  lastName: false,
  firstName: false,
  birthDate: false,
  phone: false,
  email: false,
};
