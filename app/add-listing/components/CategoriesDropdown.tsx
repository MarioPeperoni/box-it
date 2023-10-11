import { useState } from "react";
import { useFormikContext } from "formik";

import { twMerge } from "tailwind-merge";

import useCategories, { Category } from "@/app/hooks/useCategories";

import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";

interface CategoriesDropdownProps {
  errors?: any;
  touched?: any;
}

const CategoriesDropdown: React.FC<CategoriesDropdownProps> = ({
  errors,
  touched,
}) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Category | null>(null);

  const categories = useCategories();

  const formik = useFormikContext();

  const handleSelect = (item: Category) => {
    setSelected(item);
    formik.setFieldValue("category", item.name);
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
          {selected ? (
            <div className="flex items-center justify-center gap-3">
              <selected.icon
                size={18}
                className={`${selected.colors.colorText}`}
              />
              <span>{selected.name}</span>
            </div>
          ) : (
            <span>Select category</span>
          )}

          <MdKeyboardArrowDown
            size={24}
            className={twMerge("transition duration-200", open && "rotate-180")}
          />
        </div>
      </button>
      {open && (
        <div className="absolute bottom-0 w-[82%] lg:w-[22%]">
          {categories.map((category) => (
            <div
              key={category.name}
              className="flex cursor-pointer justify-between border-b-2 border-gray-100 bg-gray-100 p-3 font-light outline-none transition-all hover:bg-gray-200 hover:font-bold"
              onClick={() => handleSelect(category)}
            >
              <div className="flex items-center justify-center gap-3">
                <category.icon
                  size={18}
                  className={`${category.colors.colorText}`}
                />
                <span>{category.name}</span>
              </div>

              <MdKeyboardArrowRight size={24} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default CategoriesDropdown;
