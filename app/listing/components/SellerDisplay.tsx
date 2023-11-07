"use client";
import { useRouter } from "next/navigation";

import { User } from "@prisma/client";

import { format } from "date-fns";
import { FiChevronRight, FiUser } from "react-icons/fi";

interface SellerDisplayProps {
  sellerUser: User;
}

const SellerDisplay: React.FC<SellerDisplayProps> = ({ sellerUser }) => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <FiUser className="text-5xl" />
        <div>
          <p className="text-xl">{sellerUser?.username}</p>
          <p className="pt-0 text-sm font-light">
            Joined {format(new Date(sellerUser?.createdAt!), "dd/MM/yyyy")}
          </p>
        </div>
      </div>
      <div
        className="group flex cursor-pointer items-center"
        onClick={() => {
          router.push(`/profile/${sellerUser?.id}`);
        }}
      >
        <p className="pointer-events-none translate-x-5 opacity-0 transition-all delay-200 duration-500 group-hover:translate-x-0 group-hover:opacity-100">
          Go to profile
        </p>
        <FiChevronRight className="cursor-pointer text-3xl" />
      </div>
    </div>
  );
};

export default SellerDisplay;
