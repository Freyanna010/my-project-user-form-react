export type Option = {
  value: string;
  label: string;
};

export type SelectProps = {
  name?: string;
  value?: string;
  options: Option[];
  label?: string;
  onChange?(value: string): void
};
