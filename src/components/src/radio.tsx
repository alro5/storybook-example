import { InputHTMLAttributes } from "react";
import classNames from "classnames";
import "../styles/radio.scss";
import { FieldValues, RegisterOptions, UseFormRegister } from "react-hook-form";

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  name: string;
  displayName: string;
  register?: UseFormRegister<FieldValues>;
  errors?: RegisterOptions;
  id: string;
  textLabel?: string;
}

export function Radio(props: RadioProps) {
  const {
    errors,
    className,
    type = "radio",
    name,
    displayName,
    id,
    register,
    textLabel,
    ...rest
  } = props;

  const classes = classNames("radio", className);

  return (
    <div className={classes}>
      <input
        type={type}
        id={id}
        {...(register && register(name, errors))}
        {...rest}
      />
      <div className="radio__labels">
        <label className="radio__button" htmlFor={id}></label>
        {textLabel && (
          <label className="radio__text" htmlFor={id}>
            {textLabel}
          </label>
        )}
      </div>
    </div>
  );
}
