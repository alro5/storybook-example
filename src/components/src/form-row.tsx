import { PropsWithChildren } from 'react';

export function FormRow(props: PropsWithChildren<{}>): JSX.Element {
  const { children } = props;

  return <div className="form__row">{children}</div>;
}
