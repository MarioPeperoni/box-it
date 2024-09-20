import getListings from "@/helpers/getListings";

import ListingDisplay from "@/components/listings/ListingDisplay";
import CategoriesDisplay from "@/components/categiories/CategoriesDisplay";
import SearchBox from "@/components/SearchBox";

const Home = async () => {
  const listings = await getListings();
  return (
    <>
      <SearchBox />
      <CategoriesDisplay />
      <div className="bg-neutral-100 lg:px-40">
        <ListingDisplay
          listings={listings.listings}
          mode="grid"
          mainPage
          title="Recent Listings"
        />
      </div>
    </>
  );
};

export default Home;
