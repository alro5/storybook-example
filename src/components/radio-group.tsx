import { useFormContext } from "react-hook-form";
import { Radio } from "./radio";

export interface RadioGroupProps {
  options: RadioGroupOption[];
  name: string;
  displayName: string;
  groupHeadline?: string;
}

interface RadioGroupOption {
  value: string | number;
  displayValue: string;
}

export function RadioGroup(props: RadioGroupProps): JSX.Element {
  const { options, name, displayName, groupHeadline } = props;

  const { register } = useFormContext();

  return (
    <div className="radio__group">
      {groupHeadline && (
        <p className="radio__group__headline">{groupHeadline}</p>
      )}
      <div className="radio__group__buttons">
        {options.map((o, i) => {
          return (
            <Radio
              key={`radio-btn-${name}-${i}`}
              name={name}
              id={`radio-btn-choice-${name}-${i}`}
              displayName={displayName}
              value={o.value}
              textLabel={o.displayValue}
              register={register}
              errors={{
                required: true,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
