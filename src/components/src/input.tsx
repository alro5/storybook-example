import { InputHTMLAttributes } from "react";
import classNames from "classnames";
import "../styles/input.scss";
import {
  FieldValues,
  RegisterOptions,
  UseFormRegister,
  UseFormRegisterReturn,
} from "react-hook-form";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  displayName: string;
  className?: string;
  block?: boolean;
  errors?: RegisterOptions;
  register?: UseFormRegister<FieldValues>;
}

export function Input(props: InputProps) {
  const {
    block = false,
    errors,
    className,
    displayName,
    register,
    ...inputProps
  } = props;

  const classes = classNames("input", className, {
    "input__layout--block": block,
  });

  return (
    <input
      className={classes}
      {...(register && register(props.name, errors as RegisterOptions))}
      {...inputProps}
    />
  );
}
