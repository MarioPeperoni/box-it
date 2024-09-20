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
        "group flex flex-1 cursor-pointer justify-center gap-3 p-2 transition hover:bg-boxit-primary md:justify-start md:p-5 md:pr-12",
        active && "bg-boxit-primary",
      )}
      href={href}
    >
      <Icon
        className={twMerge(
          "text-4xl text-boxit-primary transition group-hover:text-white md:text-2xl md:group-hover:text-black",
          active && "text-white md:text-black",
        )}
      />
      <p className="hidden font-bold md:block">{text}</p>
    </Link>
  );
};

export default ProfileSideMenuItem;
