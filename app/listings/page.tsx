import getListings from "@/helpers/getListings";

import ListingsBody from "@/app/listings/ListingsBody";

import SearchBox from "@/components/SearchBox";

import Filters from "@/types/Filter";

interface ListingsPageParams {
  searchParams: {
    page: string;
    sort: "priceasc" | "pricedesc" | "newest";
    filters: Filters;
    displayMode: "grid" | "list";
    category: string;
    search: string;
  };
}

const ListingsPage = async ({ searchParams }: ListingsPageParams) => {
  const listings = await getListings(
    searchParams.page,
    searchParams.sort,
    searchParams.search,
    searchParams.category,
  );

  return (
    <>
      <SearchBox />
      <ListingsBody
        listings={listings.listings}
        listingsNumber={listings.count}
        initialDisplayMode={searchParams.displayMode}
        initialFilters={searchParams.filters}
        initialPage={parseInt(searchParams.page)}
        initialSort={searchParams.sort}
        initialCategory={searchParams.category}
        initialSearch={searchParams.search}
      />
    </>
  );
};

export default ListingsPage;
