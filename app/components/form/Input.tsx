import { ErrorMessage, Field } from "formik";
import { twMerge } from "tailwind-merge";

interface InputProps {
  name: string;
  label?: string;
  type?: string;
  touched?: boolean;
  errors?: string;
  placeholder?: string;
  required?: boolean;
  as?: "input" | "textarea";
  size?: any;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  name,
  label,
  type,
  touched,
  errors,
  placeholder,
  required = true,
  as = "input",
  size = "md",
  disabled,
}) => {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={name}
        className={twMerge("text-sm font-light", !label && "sr-only")}
      >
        {label ? label : name}
      </label>
      <Field
        as={as}
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder ? placeholder : ""}
        disabled={disabled}
        className={twMerge(
          "h-14 rounded-md border-b-2 border-gray-100 bg-gray-100 p-4 font-light outline-none transition-all focus:border-boxit-primary",
          touched && errors && "border-red-500 focus:border-red-500",
          size === "sm" && "lg:w-[10%]",
          size === "md" && "lg:w-[20%]",
          size === "lg" && "lg:w-[60%]",
          size === "full" && "lg:w-full",
          as === "textarea" && "h-64",
          disabled && "text-gray-500",
        )}
      />
      <ErrorMessage
        name={name}
        component="div"
        className="text-sm text-red-500"
      />
    </div>
  );
};

export default Input;
