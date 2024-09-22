interface OrderDetailItemProps {
  title: string;
  children: React.ReactNode;
}

const OrderDetailItem: React.FC<OrderDetailItemProps> = ({
  title,
  children,
}) => {
  return (
    <div className="flex flex-1 flex-col rounded-md bg-white p-3">
      <p className="mb-1 font-bold text-neutral-800">{title}</p>
      {children}
    </div>
  );
};

export default OrderDetailItem;
