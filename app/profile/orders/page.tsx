import getOrders from "@/app/helpers/getOrders";
import getUser from "@/app/helpers/getUser";

import OrderItem from "../components/OrderItem";

const ProfileOrders = async () => {
  const user = await getUser();
  if (!user) return null;
  const orders = await getOrders(user.id);
  return (
    <section className="w-full">
      <h1 className="mb-3 text-2xl font-bold">My orders</h1>
      <div className="flex flex-col gap-2">
        {orders?.length !== 0 ? (
          // @ts-ignore
          orders.map((order) => <OrderItem key={order.id} order={order} />)
        ) : (
          <p className="h-full items-center justify-center text-center text-gray-700">
            You have no orders
          </p>
        )}
      </div>
    </section>
  );
};

export default ProfileOrders;
