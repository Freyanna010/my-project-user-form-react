import { EMAIL_REGEX } from "./constants";

export const isValidEmail = (email: string) => EMAIL_REGEX.test(email);

export const isValidTextField = (formValue: any) =>
  formValue.lastName !== "" &&
  formValue.firstName !== "" &&
  formValue.birthDate !== "";


const error = {
lastName: false,
firstName: false,
birthDate: false,
phone: false,
email: false,
}








