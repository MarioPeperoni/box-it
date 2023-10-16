import Dropdown from "@/app/components/form/Dropdown";

import { twMerge } from "tailwind-merge";

import { TbLayoutGrid, TbLayoutList } from "react-icons/tb";

interface SortAndAlignToggleProps {
  mode: "grid" | "list";
  setMode: (mode: "grid" | "list") => void;
  sort: "newest" | "priceasc" | "pricedesc";
  setSort: (sort: "newest" | "priceasc" | "pricedesc") => void;
}

const SortAndAlignToggle: React.FC<SortAndAlignToggleProps> = ({
  mode,
  setMode,
  sort,
  setSort,
}) => {
  const sortOptions: Record<string, string> = {
    Newest: "newest",
    "Price: Low to High": "priceasc",
    "Price: High to Low": "pricedesc",
  };

  const handleSelect = (item: string) => {
    const selectedSort = sortOptions[item];
    if (selectedSort)
      setSort(selectedSort as "newest" | "priceasc" | "pricedesc");
  };

  const returnTitle = (sortType: "newest" | "priceasc" | "pricedesc") => {
    for (const item in sortOptions) {
      if (sortOptions[item] === sortType) {
        return item;
      }
    }
    return undefined;
  };

  return (
    <div className="flex items-center justify-end gap-2 bg-white p-5">
      <Dropdown
        items={Object.keys(sortOptions)}
        handle={handleSelect}
        responsive={false}
        initial={returnTitle(sort)}
        overrideStyles={{
          container: "w-48 mr-5",
          button: "py-2 h-auto",
        }}
      />
      <TbLayoutList
        size={28}
        className={twMerge(
          "cursor-pointer text-neutral-900 transition hover:text-neutral-700",
          mode == "list" && "text-boxit-primary hover:text-boxit-secondary",
        )}
        onClick={() => setMode("list")}
      />
      <TbLayoutGrid
        size={28}
        className={twMerge(
          "cursor-pointer text-neutral-900 transition hover:text-neutral-700",
          mode == "grid" && "text-boxit-primary hover:text-boxit-secondary/80",
        )}
        onClick={() => setMode("grid")}
      />
    </div>
  );
};

export default SortAndAlignToggle;
