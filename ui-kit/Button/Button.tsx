import { FC } from "react";
import { ButtonProps } from "./ВuttonType";
import classes from "./Вutton.module.scss"


const Button: FC<ButtonProps> = ({ children}, props) => {
  return (
    <button type={props.type} className={classes[props.className]} >
           <p>{children}</p>
    </button>
  );
};

export default Button;
