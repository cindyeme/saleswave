import React, { FC } from "react";

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  containerClass?: string;
  inputClass?: string;
  optional?: boolean;
  label: string;
  icon?: React.JSX.Element;
  value: string;
  type?: string;
  errors: boolean;
  errorMsg?: string;
}

const InputText: FC<InputTextProps> = ({
  containerClass,
  optional,
  label,
  inputClass,
  value,
  errors,
  errorMsg,
  icon,
  type = "text",
  ...rest
}) => {
  return (
    <div className={containerClass}>
      <div
        className={`w-full h-[51px] bg-neutral-60 rounded-lg border border-neutral-60 hover:border hover:border-primary-500 focus:bg-primary-500 relative text-xsm`}
      >
        {icon && <span className="mx-4 ">{icon}</span>}

        <input
          type={type}
          className={`w-full absolute h-full bg-transparent p-4 rounded-lg z-[99] no-focus text-grey-900`}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          value={value}
          {...rest}
        />
        {!value && (
          <p className="absolute top-4 left-4 text-xsm">
            <span className="text-grey-500 font-medium">{label}</span>
            {!optional && <span className="text-primary-600">*</span>}
          </p>
        )}
      </div>
      {errors && <p className="mt-2 text-xs text-red-500">{errorMsg}</p>}
    </div>
  );
};
export default InputText;
