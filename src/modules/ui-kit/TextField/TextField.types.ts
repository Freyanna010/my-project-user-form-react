export type LabelPosition = "floating" | "left" | "top";

export type TextFieldProps = {
  error?: boolean | string;
  id?: string;
  label?: React.ReactNode;
  labelPosition?: LabelPosition;
  mask?: string | RegExp;
  name?: string;
  onBlur?(event: React.FocusEvent<HTMLInputElement>): void;
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void;
  onFocus?(event: React.FocusEvent<HTMLInputElement>): void;
  placeholder?: string;
  required?: boolean;
  value?: string | number;
  className: "long" | "short";
  type?: "string" | "number" | "tel";
};
