import { InputHTMLAttributes } from 'react';
import classNames from 'classnames';
import '../../styles/checkbox.scss';
import { FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * Adds custom class
   */
  className?: string;
  /**
   * Input name attribute
   */
  name: string;
  displayName: string;
  register?: UseFormRegister<FieldValues>;
  options?: RegisterOptions;
  id: string;
  textLabel?: string;
}

/**
 * Checkbox component
 */
export const Checkbox = (props: CheckboxProps) => {
  const { register, options, className, type = 'checkbox', name, displayName, id, textLabel, ...rest } = props;

  const classes = classNames('checkbox', className);

  return (
    <div className={classes}>
      <input name={name} type={type} id={id} {...(register && register(name, options))} {...rest} />
      <div className="checkbox__labels">
        <label className="checkbox__button" htmlFor={id}></label>
        {textLabel && (
          <label className="checkbox__text" htmlFor={id}>
            {textLabel}
          </label>
        )}
      </div>
    </div>
  );
};
