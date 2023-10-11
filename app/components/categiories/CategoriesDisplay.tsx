import CategoriesItem from "./CategoriesItem";

import useCategories from "@/app/hooks/useCategories";

const CategoriesDisplay = () => {
  const categories = useCategories();
  return (
    <section className="flex flex-col items-center justify-center p-10">
      <h1 className=" text-3xl font-bold">Main Categories</h1>
      <div className="flex flex-wrap justify-evenly gap-5 p-10 pt-5">
        {categories.map((category) => (
          <CategoriesItem key={category.name} {...category} />
        ))}
      </div>
    </section>
  );
};

export default CategoriesDisplay;
