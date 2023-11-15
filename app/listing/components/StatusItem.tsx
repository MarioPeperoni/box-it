import { twMerge } from "tailwind-merge";

import { FiInfo } from "react-icons/fi";

interface StatusItemProps {
  status: string;
}

const StatusItem: React.FC<StatusItemProps> = ({ status }) => {
  const statusDictionary = {
    sold: {
      message: "This item has been sold",
      colorBackground: "bg-orange-100",
      colorText: "text-orange-700",
    },
    deleted: {
      message: "This item has been deleted",
      colorBackground: "bg-red-100",
      colorText: "text-red-700",
    },
  };

  const statusEntry =
    status === ("sold" || "deleted") ? statusDictionary[status] : null;

  return (
    statusEntry && (
      <div
        className={twMerge(
          "mx-[3%] flex w-full max-w-[1120px] items-center justify-center gap-2 self-center bg-orange-100 p-5 text-center font-semibold",
          status && `${statusEntry.colorBackground} ${statusEntry.colorText}`,
        )}
      >
        <FiInfo className="inline-block text-2xl" />
        {status && statusEntry.message}
      </div>
    )
  );
};

export default StatusItem;
