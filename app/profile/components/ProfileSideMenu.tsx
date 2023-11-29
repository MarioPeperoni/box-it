"use client";

import { usePathname } from "next/navigation";

import ProfileSideMenuItem from "./SideMenuItem";

import { FaMoneyBillWave, FaList, FaCogs, FaBoxOpen } from "react-icons/fa";

const ProfileSideMenu = () => {
  const pathname = usePathname();
  return (
    <div className="flex h-auto flex-row justify-center md:h-full md:flex-col md:justify-start">
      <ProfileSideMenuItem
        text="My listings"
        href="listings"
        icon={FaList}
        active={pathname === "/profile/listings"}
      />
      <ProfileSideMenuItem
        text="My orders"
        href="orders"
        icon={FaBoxOpen}
        active={pathname === "/profile/orders"}
      />
      <ProfileSideMenuItem
        text="Payments"
        href="payments"
        icon={FaMoneyBillWave}
        active={pathname === "/profile/payments"}
      />
      <ProfileSideMenuItem
        text="Settings"
        href="settings"
        icon={FaCogs}
        active={pathname === "/profile/settings"}
      />
    </div>
  );
};

export default ProfileSideMenu;
