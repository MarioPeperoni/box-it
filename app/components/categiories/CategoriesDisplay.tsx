import CategoriesItem from "./CategoriesItem";

import useCategories from "@/app/hooks/useCategories";

const CategoriesDisplay = () => {
  const categories = useCategories();
  return (
    <section className="flex flex-col items-center justify-center bg-orange-100 p-2">
      <div className="grid w-auto grid-cols-2 gap-1 md:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <CategoriesItem key={category.name} {...category} />
        ))}
      </div>
    </section>
  );
};

export default CategoriesDisplay;
