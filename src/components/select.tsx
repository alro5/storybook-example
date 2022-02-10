import { SelectHTMLAttributes } from "react";
import classNames from "classnames";
import "../styles/select.scss";
import { RegisterOptions } from "react-hook-form";

export interface InputProps extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
  block?: boolean;
  name: string;
  displayName: string;
  register?: (inputName: string, errors: RegisterOptions) => void;
  errors?: RegisterOptions;
  options: string[];
}

export function Select(props: InputProps) {
  const {
    register,
    block = true,
    errors,
    className,
    options,
    placeholder,
    displayName,
    ...inputProps
  } = props;

  const classes = classNames("select", className, {
    "select__layout--block": block,
  });

  return (
    <div className={classes}>
      <select
        defaultValue={""}
        {...(register && register(props.name, errors ?? {}))}
        {...inputProps}
      >
        <option value={""} disabled>
          Choose {props.name}
        </option>
        {options.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
}
