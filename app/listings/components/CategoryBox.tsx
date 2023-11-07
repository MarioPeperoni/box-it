import { twMerge } from "tailwind-merge";

import useCategories from "@/app/hooks/useCategories";

interface CategoryBoxInterface {
  categoryName: string;
}

const CategoryBox: React.FC<CategoryBoxInterface> = ({ categoryName }) => {
  if (categoryName === "") return null;

  const categories = useCategories();
  const category = categories.filter((cat) => cat.name === categoryName)[0];
  return (
    <div
      className={twMerge(
        "flex items-center justify-center gap-2 bg-white p-5",
        category.colors.bgLight,
      )}
    >
      <category.icon size={24} />
      <p className=" font-bold">{category.name}</p>
    </div>
  );
};

export default CategoryBox;
