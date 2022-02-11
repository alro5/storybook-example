import { SelectHTMLAttributes } from "react";
import classNames from "classnames";
import "../styles/select.scss";
import { FieldValues, RegisterOptions, UseFormRegister } from "react-hook-form";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
  block?: boolean;
  name: string;
  displayName: string;
  register?: UseFormRegister<FieldValues>;
  errors?: RegisterOptions;
  options: string[];
}

export function Select(props: SelectProps) {
  const {
    register,
    block = true,
    errors,
    className,
    options,
    placeholder,
    displayName,
    ...selectProps
  } = props;

  const classes = classNames("select", className, {
    "select__layout--block": block,
  });

  return (
    <div className={classes}>
      <select
        defaultValue={""}
        {...(register && register(props.name, errors))}
        {...selectProps}
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
