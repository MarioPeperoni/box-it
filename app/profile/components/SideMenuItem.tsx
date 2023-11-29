import Link from "next/link";

import { twMerge } from "tailwind-merge";

interface ProfileSideMenuItemProps {
  active: boolean;
  href: string;
  text: string;
  icon: any;
}

const ProfileSideMenuItem: React.FC<ProfileSideMenuItemProps> = ({
  active,
  href,
  text,
  icon: Icon,
}) => {
  return (
    <Link
      className={twMerge(
        "group flex cursor-pointer gap-3 p-5 pr-12 transition hover:bg-boxit-primary",
        active && "bg-boxit-primary",
      )}
      href={href}
    >
      <Icon
        className={twMerge(
          "text-2xl text-boxit-primary transition group-hover:text-black",
          active && "text-black",
        )}
      />
      <p className="font-bold ">{text}</p>
    </Link>
  );
};

export default ProfileSideMenuItem;
