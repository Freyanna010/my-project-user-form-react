type OptionType = { value: string; label: string };

export type SelectBoxProps = {
  name: string;
  value: string;
  onChange?(event: React.ChangeEvent<HTMLSelectElement>): void
  options: OptionType[];
  label: string;
};
