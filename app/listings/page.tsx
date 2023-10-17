import getListings from "../helpers/getListings";
import getListingsNumber from "../helpers/getListingsNumber";

import SearchBox from "../(site)/components/SearchBox";
import ListingsBody from "./ListingsBody";

import Filters from "@/types/Filter";

interface ListingsPageParams {
  searchParams: {
    page: string;
    sort: "priceasc" | "pricedesc" | "newest";
    filters: Filters;
    displayMode: "grid" | "list";
    search: string;
  };
}

const ListingsPage = async ({ searchParams }: ListingsPageParams) => {
  const listings = await getListings(searchParams.page, searchParams.sort);
  const listingsNumber = await getListingsNumber();

  return (
    <>
      <SearchBox />
      <ListingsBody
        listings={listings}
        listingsNumber={listingsNumber}
        initialDisplayMode={searchParams.displayMode}
        initialFilters={searchParams.filters}
        initialPage={parseInt(searchParams.page)}
        initialSort={searchParams.sort}
        initialSearch={searchParams.search}
      />
    </>
  );
};

export default ListingsPage;
