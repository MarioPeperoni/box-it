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

interface filter {
  price: {
    min: number;
    max: number;
  };
  category: string;
  condition: string;
}

interface ListingsPageProps {
  listings: ProductListing[];
  listingsNumber: number;
}

const ListingsBody: React.FC<ListingsPageProps> = ({
  listings,
  listingsNumber,
}) => {
  const [filters, setFilters] = useState<filter>();
  const [page, setPage] = useState<number>(1);
  const [sort, setSort] = useState<"newest" | "priceasc" | "pricedesc">(
    "newest",
  );
  const [displayMode, setDisplayMode] = useState<"grid" | "list">("grid");

  const router = useRouter();

  useEffect(() => {
    const query = {
      filters: JSON.stringify(filters),
      page,
      sort,
    };
    const url = qs.stringifyUrl({ url: "/listings", query });

    router.push(url);
  }, [filters, page, sort]);

  return (
    <section className="bg-neutral-100 px-[8%] py-5">
      {/* <FiltersMenu />
      <CategoryBox /> */}
      <SortAndAlignToggle
        mode={displayMode}
        setMode={setDisplayMode}
        sort={sort}
        setSort={setSort}
      />
      <ListingDisplay
        listings={listings}
        mode={displayMode}
        title={`We have found ${listingsNumber} listings for you`}
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
