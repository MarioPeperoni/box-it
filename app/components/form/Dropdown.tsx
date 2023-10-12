import { useState } from "react";
import { useFormikContext } from "formik";

import { twMerge } from "tailwind-merge";

import { MdKeyboardArrowDown, MdCheck } from "react-icons/md";

interface DropdownProps {
  title?: string;
  items: string[];
  id: string;
  errors?: any;
  touched?: any;
}

const Dropdown: React.FC<DropdownProps> = ({
  items,
  title,
  id,
  errors,
  touched,
}) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const formik = useFormikContext();

  const handleSelect = (item: string) => {
    setSelected(item);
    formik.setFieldValue(id, item);
    setOpen(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={twMerge(
          "h-14 w-full rounded-md border-b-2 border-gray-100 bg-gray-100 p-4 font-light outline-none transition-all lg:w-[25%]",
          open && "border-boxit-primary",
          touched && errors && "border-red-500",
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
        <div className="absolute w-[82%] lg:w-[22%]">
          {items.map((item) => (
            <div
              key={item}
              className="flex cursor-pointer justify-between border-b-2 border-gray-100 bg-gray-100 p-3 font-light outline-none transition-all hover:bg-gray-200 hover:font-bold"
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
      )}
    </>
  );
};

export default Dropdown;
