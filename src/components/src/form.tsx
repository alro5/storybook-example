import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Button } from './button';
import '../../styles/form.scss';

export function Form({
  defaultValues,
  children,
  onSubmit,
  showResetButton,
}: {
  defaultValues: Record<string, any>;
  children: JSX.Element[] | JSX.Element;
  showResetButton?: boolean;
  onSubmit: (data: Record<string, any>) => void;
}) {
  const methods = useForm({ defaultValues });
  const { handleSubmit, reset, formState } = methods;

  const { errors } = formState;

  return (
    <FormProvider {...methods}>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        {React.Children.map(children, (child) => {
          return child.props.name ? (
            <div className={'form__row' + (errors[child.props.name] ? ' form__row--error' : '')}>
              {React.createElement(child.type, {
                ...{
                  ...child.props,
                  register: methods.register,
                  key: child.props.name,
                },
              })}
              {errors[child.props.name]?.type === 'required' && (
                <p className="form__error">{`${child.props.displayName} is required`}</p>
              )}
              {errors[child.props.name]?.type === 'pattern' && (
                <p className="form__error">{`${child.props.displayName} is invalid`}</p>
              )}
            </div>
          ) : (
            child
          );
        })}
        <div className="form__actions">
          {showResetButton && <Button onClick={() => reset()} label="Reset" />}
          <Button primary label="Submit" type="submit" />
        </div>
      </form>
    </FormProvider>
  );
}
