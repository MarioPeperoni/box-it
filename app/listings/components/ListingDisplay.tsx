import { ProductListing } from "@prisma/client";

import { twMerge } from "tailwind-merge";

import BoxCard from "./cards/BoxCard";
import ListCard from "./cards/ListCard";

interface ListingDisplayProps {
  listings: ProductListing[];
  mode: "grid" | "list";
  title?: string;
  center?: boolean;
  mainPage?: boolean;
}

const ListingDisplay: React.FC<ListingDisplayProps> = ({
  listings,
  mode,
  title,
  mainPage = false,
}) => {
  return (
    <div className="flex pb-10">
      <div className="flex w-full origin-center flex-col bg-neutral-100">
        <div>
          <p
            className={twMerge(
              "py-5 text-3xl font-bold",
              mainPage && "text-center",
            )}
          >
            {title}
          </p>
        </div>
        {listings.length == 0 && (
          <p className="flex justify-center bg-white py-20 text-xl font-light">
            Sorry, no listings have matched your search criteria
          </p>
        )}
        {mode == "grid" ? (
          <div className="grid grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {listings.map((listing) => (
              <BoxCard key={listing.id} listing={listing} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            {listings.map((listing) => (
              <ListCard key={listing.id} listing={listing} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ListingDisplay;
