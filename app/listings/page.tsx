import getListings from "../helpers/getListings";
import getListingsNumber from "../helpers/getListingsNumber";

import SearchBox from "../(site)/components/SearchBox";
import ListingsBody from "./ListingsBody";

interface ListingsPageParams {
  searchParams: {
    page: string;
    sort: string;
  };
}

const ListingsPage = async ({ searchParams }: ListingsPageParams) => {
  const listings = await getListings(searchParams.page, searchParams.sort);
  const listingsNumber = await getListingsNumber();

  return (
    <>
      <SearchBox />
      <ListingsBody listings={listings} listingsNumber={listingsNumber} />
    </>
  );
};

export default ListingsPage;
