"use client";

import { usePathname } from "next/navigation";

import ProfileSideMenuItem from "./SideMenuItem";

import { FaMoneyBillWave, FaList, FaCogs } from "react-icons/fa";

const ProfileSideMenu = () => {
  const pathname = usePathname();
  return (
    <div className="flex h-full flex-col">
      <ProfileSideMenuItem
        text="Listings"
        href="listings"
        icon={FaList}
        active={pathname === "/profile/listings"}
      />
      <ProfileSideMenuItem
        text="Orders"
        href="orders"
        icon={FaMoneyBillWave}
        active={pathname === "/profile/orders"}
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
