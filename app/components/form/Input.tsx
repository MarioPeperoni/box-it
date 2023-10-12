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
  size?: "sm" | "md" | "lg";
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
        className={twMerge(
          "h-14 rounded-md border-b-2 border-gray-100 bg-gray-100 p-4 font-light outline-none transition-all focus:border-boxit-primary lg:w-[60%]",
          touched && errors && "border-red-500 focus:border-red-500",
          size === "sm" && "lg:w-[10%]",
          size === "md" && "lg:w-[20%]",
          size === "lg" && "lg:w-[60%]",
          as === "textarea" && "h-64",
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
