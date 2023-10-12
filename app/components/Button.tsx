import { twMerge } from "tailwind-merge";

interface ButtonProps {
  children: React.ReactNode;
  type: any;
  primary?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type,
  primary,
  disabled,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={twMerge(
        primary
          ? "rounded-sm border-4 border-white bg-boxit-primary px-5 py-3 font-bold transition-all duration-300 enabled:hover:border-8 enabled:hover:border-boxit-primary enabled:hover:bg-white enabled:hover:px-4 enabled:hover:py-2"
          : "border-b-2 border-white font-semibold transition hover:border-boxit-primary",
        disabled && "bg-gray-300",
      )}
    >
      {children}
    </button>
  );
};

export default Button;
