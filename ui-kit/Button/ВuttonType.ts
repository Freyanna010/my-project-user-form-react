export type ButtonTypes = 'button' | 'submit' | 'reset';
export type ButtonClassName = 'primary' | 'secondary' | 'error';

export type ButtonProps = {
    children: React.ReactNode
    type?: ButtonTypes
    className?: ButtonClassName
};