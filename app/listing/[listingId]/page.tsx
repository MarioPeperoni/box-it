import getListing from "@/helpers/getListing";
import getUser from "@/helpers/getUser";

import Body from "@/components/listing/Body";
import WebInfoBox from "@/components/WebInfoBox";

import { PiSmileySadDuotone } from "react-icons/pi";

interface IParams {
  listingId: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
  const listing = await getListing(params.listingId);
  const user = await getUser();

  let sellerUser = null;
  if (listing) {
    sellerUser = await getUser(listing.sellerId);
  }

  return listing ? (
    <Body listing={listing} sellerUser={sellerUser!} user={user} />
  ) : (
    <WebInfoBox>
      <PiSmileySadDuotone className="text-8xl text-boxit-primary" />
      <p className="pt-2 font-semibold">
        OOPS... something went wrong with this one
      </p>
    </WebInfoBox>
  );
};

export default ListingPage;
