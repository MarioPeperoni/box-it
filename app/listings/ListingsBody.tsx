"use client";
import { useEffect, useState } from "react";

import { ProductListing } from "@prisma/client";
import qs from "query-string";

import { useRouter } from "next/navigation";

import FiltersMenu from "./components/FiltersMenu";
import CategoryBox from "./components/CategoryBox";
import SortAndAlignToggle from "./components/SortAndAlignToggle";
import ListingDisplay from "./components/ListingDisplay";
import PageButtons from "./components/PageButtons";

import Filters from "@/types/Filter";

interface ListingsPageProps {
  listings: ProductListing[];
  listingsNumber: number;
  initialFilters: Filters;
  initialPage: number;
  initialSort: "newest" | "priceasc" | "pricedesc";
  initialDisplayMode: "grid" | "list";
  initialCategory: string;
  initialSearch: string;
}

const ListingsBody: React.FC<ListingsPageProps> = ({
  listings,
  listingsNumber,
  initialFilters,
  initialPage,
  initialSort,
  initialDisplayMode,
  initialCategory,
  initialSearch,
}) => {
  const [filters, setFilters] = useState<Filters>(initialFilters || {});
  const [page, setPage] = useState<number>(initialPage || 1);
  const [sort, setSort] = useState<"newest" | "priceasc" | "pricedesc">(
    initialSort || "newest",
  );
  const [displayMode, setDisplayMode] = useState<"grid" | "list">(
    initialDisplayMode || "grid",
  );
  const [category, setCategory] = useState<string>(initialCategory || "");
  const [search, setSearch] = useState<string>(initialSearch || "");

  const router = useRouter();

  useEffect(() => {
    const query = {
      filters: JSON.stringify(filters),
      page,
      sort,
      displayMode,
      category,
      search,
    };
    const url = qs.stringifyUrl({ url: "/listings", query });

    router.push(url);
  }, [filters, page, sort, displayMode, search]);

  return (
    <section className="flex flex-col gap-4 bg-neutral-100 px-[8%] py-5">
      {/* <FiltersMenu /> */}
      <CategoryBox categoryName={category} />
      <SortAndAlignToggle
        mode={displayMode}
        setMode={setDisplayMode}
        sort={sort}
        setSort={setSort}
      />
      <ListingDisplay
        listings={listings}
        mode={displayMode}
        title={
          listingsNumber == 1
            ? `We have found ${listingsNumber} listing for you`
            : `We have found ${listingsNumber} listings for you`
        }
      />
      <PageButtons
        page={page}
        setPage={setPage}
        numberOfListings={listingsNumber}
      />
    </section>
  );
};

export default ListingsBody;
