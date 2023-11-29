const OrdersLoading = () => {
  return (
    <section className="w-full">
      <h1 className="mb-3 text-2xl font-bold">My orders</h1>
      <div className="flex flex-col gap-2">
        <div className="h-20 w-full animate-pulse bg-neutral-100" />
        <div className="h-20 w-full animate-pulse bg-neutral-100" />
        <div className="h-20 w-full animate-pulse bg-neutral-100" />
        <div className="h-20 w-full animate-pulse bg-neutral-100" />
        <div className="h-20 w-full animate-pulse bg-neutral-100" />
      </div>
    </section>
  );
};

export default OrdersLoading;
