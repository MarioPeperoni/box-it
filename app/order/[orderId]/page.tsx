import getOrder from "@/app/helpers/getOrder";
import { format } from "date-fns";

interface IParams {
  orderId: string;
}

const OrderPage = async ({ params }: { params: IParams }) => {
  const order = await getOrder(params.orderId);
  return (
    <div className="p-2">
      <h1>Temp Order Page:</h1>
      <p>ID: {order?.id}</p>
      <p>Buyer ID: {order?.buyerId}</p>
      <p>Seller ID: {order?.product.sellerId}</p>
      <p>Status: {order?.status}</p>
      <p>Price: {order?.fullPrice}</p>
      <br></br>
      <p>Addres 1: {order?.addres?.line1}</p>
      <p>Addres 2: {order?.addres?.line2}</p>
      <p>City: {order?.addres?.city}</p>
      <p>Zip: {order?.addres?.zip}</p>
      <p>Country: {order?.addres?.country}</p>
      <p>
        Created at: {format(order?.createdAt!, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")}
      </p>
      <p>
        Updated at: {format(order?.updatedAt!, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")}
      </p>
      <br></br>
      <p>Product ID: {order?.productId}</p>
      <p>Product title: {order?.product.title}</p>
      <p>Product status: {order?.product.status}</p>
    </div>
  );
};

export default OrderPage;
