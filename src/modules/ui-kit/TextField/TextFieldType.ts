export type LabelPosition = "floating" | "left" | "top";

export type TextFieldProps = {
  /**
   * Поле заполнено с ошибкой. Может принимать текст ошибки.
   * @default false
   */
  error?: boolean | string;
  /**
   * Идентификатор.
   */
  id?: string;
  /**
   * Лейбл элемента.
   */
  label?: React.ReactNode;
  /**
   * Позиция лейбла.
   * @default top
   */
  labelPosition?: LabelPosition;
  /**
   * Маска для ввода.
   */
  mask?: string | RegExp;
  /**
   * Имя компонента.
   */
  name?: string;
  /**
   * Обработчик события пропадания фокуса.
   */
  onBlur?(event: React.FocusEvent<HTMLInputElement>): void;
  /**
   * Обработчик события изменения значения поля.
   */
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void;
  /**
   * Обработчик события фокуса.
   */
  onFocus?(event: React.FocusEvent<HTMLInputElement>): void;
  /**
   * Заполнитель компонента.
   */
  placeholder?: string;
  /**
   * Обязательно для заполнения.
   * @default false
   */
  required?: boolean;
  /**
   * Значение элемента.
   */
  value?: string | number;
  className: "long" | "short";
};
