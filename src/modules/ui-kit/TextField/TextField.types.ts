export type TextFieldProps = {
  error?: boolean | string;
  id?: string;
  label?: React.ReactNode;
  mask?: 'phone' | 'date';
  name?: string;
  onBlur?(event: React.FocusEvent<HTMLInputElement>): void;
  onChange?(value: string): void;
  onFocus?(event: React.FocusEvent<HTMLInputElement>): void;
  value?: string | number;
  className?: string;
  type?: "string" | "number" | "tel";
};
