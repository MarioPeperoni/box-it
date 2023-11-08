import getListing from "@/app/helpers/getListing";
import getUser from "@/app/helpers/getUser";

import Body from "../components/Body";

import { PiSmileySadDuotone } from "react-icons/pi";

interface IParams {
  listingId: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
  const listing = await getListing(params.listingId);
  let sellerUser = null;
  if (listing) {
    sellerUser = await getUser(listing.sellerId);
  }

  return listing ? (
    <Body listing={listing} sellerUser={sellerUser!} />
  ) : (
    <div className="flex justify-center bg-neutral-100 py-8">
      <div className="flex flex-col items-center bg-white p-20 py-10">
        <PiSmileySadDuotone className="text-8xl text-boxit-primary" />
        <p className="pt-2 font-semibold">
          OOPS... something went wrong with this one
        </p>
      </div>
    </div>
  );
};

export default ListingPage;
