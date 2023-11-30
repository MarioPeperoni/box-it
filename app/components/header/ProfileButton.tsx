"use client";

import { User } from "@prisma/client";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

import LinkWithIcon from "./LinkWithIcon";
import ProfileButtonOption from "./ProfileButtonOption";

import toast from "react-hot-toast";

import { FiUser, FiLogOut, FiList, FiSettings, FiLogIn } from "react-icons/fi";

interface ProfileButtonProps {
  user: User | null;
}

const ProfileButton: React.FC<ProfileButtonProps> = ({ user }) => {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut()
      .then(() => {
        toast.success("You have been logged out!");
      })
      .then(() => {
        router.push("/");
        router.refresh();
      });
  };
  return user ? (
    <div className="group">
      <LinkWithIcon
        href="/profile/listings"
        icon={FiUser}
        text={user.username}
      />
      <div className={"absolute hidden w-48 group-hover:block"}>
        <div className="h-6" />
        <ProfileButtonOption
          href="/profile/listings"
          text="My listings"
          icon={FiList}
        />
        <ProfileButtonOption
          href="/profile/settings"
          text="Account settings"
          icon={FiSettings}
        />
        <button className="w-full" onClick={handleLogout}>
          <ProfileButtonOption href="" text="Log out" icon={FiLogOut} />
        </button>
      </div>
    </div>
  ) : (
    <div className="group">
      <LinkWithIcon
        href="/profile/listings"
        icon={FiUser}
        text="Your account"
      />
      <div className="absolute hidden w-48 group-hover:block">
        <div className="h-6" />
        <ProfileButtonOption href="/login" text="Log in" icon={FiLogIn} />
      </div>
    </div>
  );
};

export default ProfileButton;
