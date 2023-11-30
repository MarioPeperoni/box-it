import WebInfoBox from "@/app/components/WebInfoBox";

import { FaBoxOpen } from "react-icons/fa";
import { FaRotate } from "react-icons/fa6";

import getOrder from "@/app/helpers/getOrder";

interface Buy_SuccessParams {
  searchParams: {
    orderId: string;
  };
}

const Buy_Success = async ({ searchParams }: Buy_SuccessParams) => {
  const order = await getOrder(searchParams.orderId, false);

  switch (order?.status) {
    case "paid":
      return (
        <WebInfoBox
          className=""
          buttonText="Go to order"
          action={"redirect"}
          href={`/profile/orders`}
        >
          <FaBoxOpen className="text-8xl text-boxit-primary" />
          <h1 className="mb-2 text-4xl font-bold text-gray-800">
            Congratulations!
          </h1>
          <p className=" text-lg text-gray-600">
            You successfully placed an order for this item.
          </p>
          <p className="text-sm text-gray-500">
            You can view the status of your purchase in your profile.
          </p>
        </WebInfoBox>
      );
    case "pending":
      return (
        <WebInfoBox className="" buttonText="Refresh Status" action="refresh">
          <FaRotate className="mb-2 text-8xl text-boxit-primary" />
          <h1 className="mb-2 text-3xl font-bold text-gray-800">
            Your order is being processed
          </h1>
          <p className=" text-lg text-gray-600">
            Your order for this item is still being processed.
          </p>
          <p className="text-sm text-gray-500">
            You can refresh this page to check if the status has changed.
          </p>
        </WebInfoBox>
      );
    case "cancelled":
      return (
        <WebInfoBox
          className=""
          buttonText="Go back"
          action="redirect"
          href="/"
        >
          <FaBoxOpen className="text-8xl text-boxit-primary" />
          <h1 className="mb-2 text-4xl font-bold text-gray-800">
            We&apos;re sorry!
          </h1>
          <p className=" text-lg text-gray-600">
            Your order for this item has been cancelled.
          </p>
        </WebInfoBox>
      );
    default:
      return null;
  }
};

export default Buy_Success;
