"use client";

import { useState } from "react";
import Image from "next/image";

import format from "date-fns/format";
import { twMerge } from "tailwind-merge";

import { Order, ProductListing, Address, User } from "@prisma/client";
import { FiUser } from "react-icons/fi";

interface OrderItemProps {
  order: Order & {
    product: ProductListing & {
      seller: User;
    };
  } & {
    address: Address;
  };
}

const OrderItem: React.FC<OrderItemProps> = ({ order }) => {
  const [open, setOpen] = useState(false);
  const statusColor = () => {
    switch (order.status) {
      case "pending":
        return "bg-orange-500";
      case "paid":
        return "bg-green-500";
      case "shipped":
        return "bg-blue-500";
      case "delivered":
        return "bg-purple-500";
      case "cancelled":
        return "bg-red-500";
    }
  };
  return (
    <div
      className="flex cursor-pointer select-none flex-col gap-2 bg-neutral-100 p-3"
      onClick={() => setOpen(!open)}
    >
      <div className="flex w-full items-center justify-between">
        <p className="text-bold text-sm text-gray-800">
          {format(order.createdAt, "EEEE, MMMM do yyyy HH:mm")}
        </p>
        <div className="flex items-center gap-1">
          <div
            className={twMerge(
              "h-2 w-2 animate-bounce rounded-full",
              statusColor(),
            )}
          />
          <p className="text-sm">
            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
          </p>
        </div>
      </div>
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-1">
          <Image
            src={order.product.images[0]}
            alt={"Listing image"}
            width={100}
            height={100}
            className="h-8 w-8 rounded-md"
          />
          <p className="text-l font-semibold md:text-xl">
            {order.product.title}
          </p>
        </div>
        <p className="font-bold">{order.fullPrice}$</p>
      </div>
      <div
        className={twMerge(
          "hidden flex-col flex-wrap gap-2 text-sm text-gray-800 transition-all",
          open && "block",
        )}
      >
        <hr className="my-2 border-neutral-200" />
        <div className="flex gap-4">
          <div className="flex flex-col gap-3">
            <p className="rounded-md bg-white p-3">
              ID: {order.id.toUpperCase()}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-1 rounded-md bg-white p-3">
              <FiUser className="text-xl" />
              <p className="">{order.product.seller.username}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
