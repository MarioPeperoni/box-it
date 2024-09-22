import Link from "next/link";
import Image from "next/image";

import { ProductListing } from "@prisma/client";

import { format } from "date-fns";

interface ListCardProps {
  listing: ProductListing;
}

const ListCard: React.FC<ListCardProps> = ({ listing }) => {
  return (
    <Link
      href={listing.id}
      className="group flex justify-between gap-4 bg-white p-5 shadow-md transition duration-300 hover:bg-neutral-50 hover:shadow-xl"
    >
      <div className="flex gap-4">
        <div className=" flex h-40 w-52 items-center overflow-hidden rounded-md object-contain transition duration-300 group-hover:scale-95">
          <Image
            alt="Listing image"
            src={listing.images[0]}
            width={1000}
            height={1000}
            className="rounded-md"
          />
        </div>
        <div className="flex flex-col justify-between py-2">
          <div>
            <p className="text-lg font-semibold">{listing.title}</p>
            <p className="inline-block rounded-md bg-neutral-100 p-1 text-sm">
              {listing.condition}
            </p>
          </div>
          <p className="text-xs font-light text-neutral-700">
            Added {format(new Date(listing.createdAt), "dd/MM/yyyy")}
          </p>
        </div>
      </div>
      <p className="py-2 text-lg font-bold">{listing.itemPrice}zł</p>
    </Link>
  );
};

export default ListCard;
