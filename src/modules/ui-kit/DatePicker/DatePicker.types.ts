export type DatePickerProps = {
  className?: string;
  onChange?(value: string): void;
  value?: string;
  name: string;
  placeholder?: string;
  error?: boolean | string;
};
