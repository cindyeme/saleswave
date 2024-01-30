import { FC } from "react";

interface ButtonProps {
  onClick: () => void;
  small?: boolean;
  secondary?: boolean;
  cart?: boolean;
  loading?: boolean;
  label: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  onClick,
  // loading,
  small,
  secondary,
  cart,
  label,
  type = "button",
  disabled = false,
}) => {
  return cart ? (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="w-[270px] h-[41px] py-2 rounded-b bg-black text-white font-medium leading-6"
    >
      {label}
    </button>
  ) : secondary ? (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`w-[145px] flex items-center h-[50px] py-4 border ${
        disabled ? "bg-grey-400 !text-white" : "text-grey-500"
      } border-slate-200 rounded-lg`}
    >
      <span className="mx-auto text-xsm  font-medium text-center">{label}</span>
    </button>
  ) : (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`px-12 py-4 bg-red-500 rounded-lg  justify-center items-center gap-2.5 inline-flex ${
        disabled ? "bg-opacity-70" : ""
      } ${small ? "w-[145px] h-[50px] text-sm text-white" : "w-full h-14"}`}
    >
      <span className="text-neutral-50 text-xsm font-medium">{label}</span>
    </button>
  );
};
export default Button;
