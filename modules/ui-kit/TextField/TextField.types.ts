export type TextFieldProps = {
  error?: boolean | string;
  id?: string;
  label?: React.ReactNode;
  mask?: string | RegExp;
  name?: string;
  onBlur?(event: React.FocusEvent<HTMLInputElement>): void;
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void;
  onFocus?(event: React.FocusEvent<HTMLInputElement>): void;
  value?: string | number;
  className?: string;
  type?: "string" | "number" | "tel";
};
