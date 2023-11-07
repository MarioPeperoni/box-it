import getListing from "@/app/helpers/getListing";
import getUser from "@/app/helpers/getUser";

import ImageBrowser from "../components/ImageBrowser";
import SellerDisplay from "../components/SellerDisplay";

import { PiSmileySadDuotone } from "react-icons/pi";
import { FaShoppingBasket, FaBoxOpen } from "react-icons/fa";

import { format } from "date-fns";

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
    <section className="flex justify-center bg-neutral-100 px-[3%] py-8">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-5 lg:flex-row">
          <ImageBrowser images={listing.images} />
          <div className="flex flex-col gap-5 lg:w-[400px]">
            <div className="bg-white p-5">
              <p className=" text-sm font-light">
                Added {format(new Date(listing.createdAt), "dd/MM/yyyy")}
              </p>
              <p className="text-xl font-bold">{listing.title}</p>
              <p className="inline-block rounded-md bg-neutral-100 p-1 text-sm">
                {listing.condition}
              </p>
            </div>
            <div className="bg-white p-5">
              <p className="text-2xl font-bold">{listing.itemPrice}$</p>
              {listing.shippingPrice === 0 ? (
                <p className=" font-semibold text-green-700">Free shipping</p>
              ) : (
                <p className="font-light text-neutral-600">
                  Plus shipping {listing.shippingPrice}$
                </p>
              )}
              <div className="flex flex-col gap-2 pt-2">
                <button className="flex items-center justify-center gap-2 bg-boxit-primary py-2 transition hover:bg-boxit-primary/80">
                  <FaBoxOpen className="text-2xl" />
                  <p className="font-semibold">Buy now</p>
                </button>
                <button className="flex items-center justify-center gap-2 bg-boxit-primary py-2 transition hover:bg-boxit-primary/80">
                  <FaShoppingBasket className="text-2xl" />
                  <p className="font-semibold">Add to basket</p>
                </button>
              </div>
            </div>
            <div className="bg-white p-5">
              <SellerDisplay sellerUser={sellerUser!} />
            </div>
          </div>
        </div>
        <div className="mx-[3%] w-full max-w-[1120px] self-center bg-white p-5">
          <h2 className="text-2xl font-semibold">Description</h2>
          <span
            dangerouslySetInnerHTML={{
              __html: listing.description.replace(/\n/g, "<br>"),
            }}
          />
          <hr className="my-3" />
          <div className="flex justify-between text-xs font-bold text-neutral-400">
            <p>Added {format(new Date(listing.createdAt), "dd/MM/yyyy")}</p>
            <p>ID: {listing.id}</p>
          </div>
        </div>
      </div>
    </section>
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
