import ListingDisplay from "@/app/listings/components/ListingDisplay";
import CategoriesDisplay from "../components/categiories/CategoriesDisplay";
import SearchBox from "./components/SearchBox";

import getListings from "../helpers/getListings";

const Home = async () => {
  const listings = await getListings();
  return (
    <>
      <SearchBox />
      <CategoriesDisplay />
      <div className="bg-neutral-100 px-40">
        <ListingDisplay
          listings={listings}
          mode="grid"
          mainPage
          title="Recent Listings"
        />
      </div>
    </>
  );
};

export default Home;
