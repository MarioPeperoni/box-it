"use client";

import axios from "axios";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import format from "date-fns/format";
import { twMerge } from "tailwind-merge";

import Button from "@/app/components/Button";
import OrderDetailItem from "./OrderDetailItem";

import { Order, ProductListing, Address, User } from "@prisma/client";
import { FiUser, FiCopy } from "react-icons/fi";

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
  const [trackingCodeCopied, setTracingCodeCopied] = useState(false);

  const router = useRouter();

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

  const statusText = () => {
    switch (order.status) {
      case "pending":
        return "Your payment is currently being processed, or you have not completed the payment for this item.\n\nThe seller has not yet been notified about your order.";
      case "paid":
        return "Payment for your order has been successfully received.\n\nThe seller has been notified about your order and will start processing it shortly.";
      case "shipped":
        if (order.trackingNumber) {
          return `Your order has been processed and shipped for delivery.\n\nYou can track your order using the provided tracking number:\n\n ${order.trackingNumber}`;
        }
        return "Your order has been processed and shipped for delivery.\n\nSeller has not provided tracking number.";
      case "delivered":
        return "Congratulations! Your order has been successfully delivered to the specified address.\n\nEnjoy your purchase!";
      case "cancelled":
        return "Unfortunately, the order has been cancelled.\n\nIf you have any questions, please contact customer support.";
      default:
        return "Status information is currently unavailable.\n\nPlease check back later or contact customer support for assistance.";
    }
  };

  const copyCode = () => {
    if (!order.trackingNumber) return;
    navigator.clipboard.writeText(order.trackingNumber);
    setTracingCodeCopied(true);
  };

  return (
    <div className="flex flex-col bg-neutral-100">
      <div
        className={
          "flex cursor-pointer select-none flex-col bg-neutral-100 p-3"
        }
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
      </div>
      <div
        className={twMerge(
          "hidden cursor-default flex-wrap gap-2 bg-neutral-100 p-3 pt-0 text-gray-800 transition-all",
          open && "block",
        )}
      >
        <hr className="mb-2 border-neutral-200" />
        <div className="flex flex-col gap-4 md:flex-row">
          <OrderDetailItem title="Order Status:">
            <div className="flex items-center gap-2">
              <div
                className={twMerge(
                  "h-3 w-3 animate-bounce rounded-full",
                  statusColor(),
                )}
              />
              <p className=" font-semibold">
                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
              </p>
              {order.trackingNumber && (
                <>
                  <p className=" font-bold text-neutral-800">
                    {order.trackingNumber}
                  </p>
                  <FiCopy
                    className="cursor-pointer text-lg font-bold text-neutral-800"
                    onClick={() => copyCode()}
                  />
                  {trackingCodeCopied && (
                    <p className=" font-semibold text-neutral-800">Copied!</p>
                  )}
                </>
              )}
            </div>
            <span
              className="font-light"
              dangerouslySetInnerHTML={{
                __html: statusText().replace(/\n/g, "<br>"),
              }}
            />
          </OrderDetailItem>
          <OrderDetailItem title="Seller:">
            <div className="flex flex-col items-start gap-2">
              <div className="flex items-center gap-2">
                <FiUser className={"text-2xl"} />
                <p className="font-semibold">{order.product.seller.username}</p>
              </div>
              <Button
                type={"button"}
                className="border-boxit-primary hover:scale-105"
                onClick={() =>
                  router.push(`/profile/${order.product.seller.id}`)
                }
              >
                <p className="font-semibold">Go to sellers profile</p>
              </Button>
              <Button
                type={"button"}
                className="border-boxit-primary hover:scale-105"
              >
                <p className="font-semibold">Contact the seller</p>
              </Button>
            </div>
          </OrderDetailItem>
          <OrderDetailItem title="Order options:">
            <div className="flex flex-col items-start gap-2">
              {order.status === "pending" && (
                <Button
                  type={"button"}
                  className="border-boxit-primary hover:scale-105"
                  onClick={() => router.push(order.stripeSessionUrl)}
                >
                  <p className="font-semibold">Retry payment</p>
                </Button>
              )}
              <Button
                type={"button"}
                className="border-boxit-primary hover:scale-105"
                onClick={() => router.push(`/listing/${order.product.id}`)}
              >
                <p className="font-semibold">Go to listings page</p>
              </Button>
              {(order.status === "paid" || order.status === "pending") && (
                <Button
                  type={"button"}
                  className="border-red-500 hover:scale-105 hover:border-red-500"
                  onClick={() =>
                    axios
                      .post("/api/order/change-status", {
                        id: order.id,
                        status: "cancelled",
                      })
                      .then(() => router.refresh())
                  }
                >
                  <p className="font-semibold">Cancel order</p>
                </Button>
              )}
              {order.status === "cancelled" && (
                <Button
                  type={"button"}
                  className="border-red-500 hover:scale-105 hover:border-red-500"
                  onClick={() =>
                    axios
                      .post("/api/order/delete", {
                        id: order.id,
                      })
                      .then(() => router.refresh())
                  }
                >
                  <p className="font-semibold">Delete order</p>
                </Button>
              )}
            </div>
          </OrderDetailItem>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
