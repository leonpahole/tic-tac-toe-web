/* eslint-disable jsx-a11y/label-has-associated-control */

export interface AppToggleOption {
  icon: React.ReactNode;
  value: string;
}

interface IProps {
  name: string;
  label: string;
  helpText: string;
  value: string;
  options: AppToggleOption[];
  onChange(value: string): void;
}

export const AppToggle = ({
  name,
  label,
  helpText,
  onChange,
  value,
  options,
}: IProps) => {
  return (
    <fieldset className="rounded-2xl bg-navy-semi-dark px-6 pt-6 pb-8 shadow-big shadow-navy-shadow">
      <legend className="float-left mb-6 w-full text-center text-xs uppercase text-silver">
        {label}
      </legend>

      <div className="mb-4 flex rounded-lg bg-navy-dark p-2">
        {options.map((option) => {
          const isSelected = option.value === value;

          return (
            <label
              className={`flex flex-1 cursor-pointer items-center justify-center rounded-lg p-3 transition-colors ${
                isSelected ? "bg-silver text-navy-dark" : "text-silver"
              }`}
            >
              <input
                type="radio"
                name={name}
                value={option.value}
                checked={isSelected}
                onChange={() => {
                  onChange(option.value);
                }}
                className="absolute h-0 w-0 cursor-pointer opacity-0"
              />
              {option.icon}
            </label>
          );
        })}
      </div>

      <p className="text-center text-body uppercase text-silver">{helpText}</p>
    </fieldset>
  );
};
