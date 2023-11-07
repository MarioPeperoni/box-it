import { useState } from "react";
import { useFormikContext } from "formik";

import { twMerge } from "tailwind-merge";

import { MdKeyboardArrowDown, MdCheck } from "react-icons/md";

interface DropdownProps {
  title?: string;
  items: string[];
  id?: string;

  errors?: any;
  touched?: any;

  initial?: string;
  handle?: (item: string) => void;
  responsive?: boolean;

  overrideStyles?: DropdownStyles;
}

interface DropdownStyles {
  container?: string;
  button?: string;
  listItem?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  items,
  title,
  id,
  errors,
  touched,
  initial,
  handle,
  responsive = true,
  overrideStyles,
}) => {
  if (!id && !handle) {
    throw new Error("You must provide either 'id' and 'handle");
  }

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(initial);

  const formik = id ? useFormikContext() : undefined;

  const handleSelect = (item: string) => {
    if (!handle && formik) {
      setSelected(item);
      formik.setFieldValue(id!, item);
      setOpen(false);
    } else if (handle) {
      handle(item);
      setSelected(item);
      setOpen(false);
    }
  };

  return (
    <div
      className={twMerge(
        "flex flex-col",
        responsive ? "lg:w-64" : "w-64",
        overrideStyles?.container,
      )}
    >
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={twMerge(
          "h-14 w-full rounded-md border-b-2 border-gray-100 bg-gray-100 p-4 font-light outline-none transition-all",
          open && "border-boxit-primary",
          touched && errors && "border-red-500",
          overrideStyles?.button,
        )}
      >
        <div className="flex items-center justify-between">
          <span>
            {selected ? selected : title ? title : "Select an option"}
          </span>
          <MdKeyboardArrowDown
            size={24}
            className={twMerge("transition duration-200", open && "rotate-180")}
          />
        </div>
      </button>
      {open && (
        <div className="relative">
          <div className="absolute left-0 top-[100%] w-full">
            {items.map((item) => (
              <div
                key={item}
                className={twMerge(
                  "flex cursor-pointer justify-between border-b-2 border-gray-100 bg-gray-100 p-3 font-light outline-none transition-all hover:bg-gray-200 hover:font-bold",
                  overrideStyles?.listItem,
                )}
                onClick={() => handleSelect(item)}
              >
                {item}
                <MdCheck
                  size={24}
                  className={twMerge(
                    "text-boxit-primary",
                    selected !== item && "hidden",
                  )}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
