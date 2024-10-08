"use client";

import { useEffect } from "react";
import { ProductListing, User } from "@prisma/client";
import { useRouter } from "next/navigation";
import axios from "axios";

import ImageBrowser from "@/components/listing/ImageBrowser";
import SellerDisplay from "@/components/listing/SellerDisplay";
import StatusItem from "@/components/listing/StatusItem";

import { format } from "date-fns";

import {
  FaBoxOpen,
  FaChevronRight,
  FaEdit,
  FaShoppingBasket,
} from "react-icons/fa";

interface BodyProps {
  listing: ProductListing;
  sellerUser: User;
  user: User | null;
}

const Body: React.FC<BodyProps> = ({ listing, sellerUser, user }) => {
  useEffect(() => {
    axios.post(`/api/listing/${listing.id}/view`);
  }, [listing]);

  const router = useRouter();

  const onBuyNow = async () => {
    const response = await axios.post(`/api/listing/${listing.id}/checkout`);
    router.push(response.data.url);
  };

  return (
    <section className="flex justify-center bg-neutral-100 px-[3%] py-8">
      <div className="flex flex-col gap-5">
        <StatusItem
          status={user && listing.sellerId === user.id ? "own" : listing.status}
        />
        <div className="flex flex-col gap-5 lg:flex-row">
          <ImageBrowser images={listing.images} />
          <div className="flex flex-col gap-5 lg:w-[400px]">
            <div className="bg-white p-5">
              <p className="text-sm font-light">
                Added {format(new Date(listing.createdAt), "dd/MM/yyyy")}
              </p>
              <p className="text-xl font-bold">{listing.title}</p>
              <p className="inline-block rounded-md bg-neutral-100 p-1 text-sm">
                {listing.condition}
              </p>
            </div>
            <div className="bg-white p-5">
              <p className="text-2xl font-bold">{listing.itemPrice}zł</p>
              {listing.shippingPrice === 0 ? (
                <p className="font-semibold text-green-700">Free shipping</p>
              ) : (
                <p className="font-light text-neutral-600">
                  Plus shipping {listing.shippingPrice}zł
                </p>
              )}
              {(!user ||
                (user &&
                  listing.status === "active" &&
                  listing.sellerId !== user.id)) && (
                <div className="flex flex-col gap-2 pt-2">
                  <button
                    className="flex items-center justify-center gap-2 bg-boxit-primary py-2 transition hover:bg-boxit-primary/80"
                    onClick={onBuyNow}
                  >
                    <FaBoxOpen className="text-2xl" />
                    <p className="font-semibold">Buy now</p>
                  </button>
                  <button className="flex items-center justify-center gap-2 bg-boxit-primary py-2 transition hover:bg-boxit-primary/80">
                    <FaShoppingBasket className="text-2xl" />
                    <p className="font-semibold">Add to basket</p>
                  </button>
                </div>
              )}
              {user && listing.sellerId === user.id && (
                <div className="flex flex-col gap-2 pt-2">
                  <button
                    className="flex items-center justify-center gap-2 bg-boxit-primary py-2 transition hover:bg-boxit-primary/80"
                    onClick={() => router.push("/profile/listings")}
                  >
                    <FaEdit className="text-2xl" />
                    <p className="font-semibold">Edit listing</p>
                  </button>
                  <button
                    className="flex items-center justify-center gap-2 bg-boxit-primary py-2 transition hover:bg-boxit-primary/80"
                    onClick={() => router.push("/profile/listings")}
                  >
                    <FaChevronRight className="text-2xl" />
                    <p className="font-semibold">Go to my listings</p>
                  </button>
                </div>
              )}
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
            <p>Views: {listing.views}</p>
            <p>ID: {listing.id}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body;
