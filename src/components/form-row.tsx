import React, { PropsWithChildren } from "react";

export interface FormRowProps {}

export function FormRow(props: PropsWithChildren<FormRowProps>): JSX.Element {
  const { children } = props;

  return <div className="form__row">{children}</div>;
}
