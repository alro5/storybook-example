import { InputHTMLAttributes } from "react";
import classNames from "classnames";
import "../styles/input.scss";
import { RegisterOptions } from "react-hook-form";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  block?: boolean;
  name: string;
  register?: (inputName: string, errors: RegisterOptions) => void;
  errors?: RegisterOptions;
}

export function Input(props: InputProps) {
  const { register, block = true, errors, className, ...inputProps } = props;

  const classes = classNames("input", className, {
    "input__layout--block": block,
  });

  return (
    <input
      className={classes}
      {...(register && register(props.name, errors ?? {}))}
      {...inputProps}
    />
  );
}
