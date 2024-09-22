import getListings from "@/helpers/getListings";

import ListingDisplay from "@/components/listings/ListingDisplay";
import CategoriesDisplay from "@/components/categiories/CategoriesDisplay";
import SearchBox from "@/components/SearchBox";
import LoadingSpinner from "@/components/LoadingSpinner";

const HomeLoading = () => {
  return (
    <>
      <SearchBox />
      <CategoriesDisplay />
      <div className="bg-neutral-100 lg:px-40">
        <div>
          <p className="py-5 text-center text-3xl font-bold">Recent Listings</p>
        </div>
        <div className="flex items-center justify-center">
          <LoadingSpinner />
        </div>
      </div>
    </>
  );
};

export default HomeLoading;
