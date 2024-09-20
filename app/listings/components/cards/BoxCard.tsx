import Image from "next/image";
import Link from "next/link";

import { ProductListing } from "@prisma/client";

import { format } from "date-fns";

interface BoxCardProps {
  listing: ProductListing;
  showCategory?: boolean;
}

const BoxCard: React.FC<BoxCardProps> = ({ listing, showCategory = false }) => {
  return (
    <Link
      className="group flex w-[100%] flex-col gap-1 bg-white p-5 shadow-md transition duration-300 hover:bg-neutral-50 hover:shadow-xl"
      href={`listing/${listing.id}`}
    >
      <div className="flex h-48 items-center overflow-hidden rounded-md object-contain transition duration-300 group-hover:scale-95">
        <Image
          alt="Listing image"
          src={listing.images[0]}
          width={1000}
          height={1000}
          className="flex self-center rounded-md"
        />
      </div>
      <div className="flex justify-between pt-2">
        <p className="font-bold">{listing.title}</p>
        <div>
          <p className="rounded-md bg-neutral-100 p-1 text-sm">
            {listing.condition}
          </p>
        </div>
      </div>
      <p className="text-xs font-light text-neutral-700">
        Added {format(new Date(listing.createdAt), "dd/MM/yyyy")}
      </p>
      <div className="flex flex-1 flex-col justify-end">
        <p className="text-lg font-bold">{listing.itemPrice}zł</p>
      </div>
    </Link>
  );
};

export default BoxCard;
