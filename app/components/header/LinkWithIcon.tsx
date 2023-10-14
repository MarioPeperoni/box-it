import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface LinkWithIconProps {
  href: string;
  text: string;
  icon: any;
  hover?: boolean;
}

const LinkWithIcon: React.FC<LinkWithIconProps> = ({
  href,
  icon: Icon,
  text,
  hover = true,
}) => {
  return (
    <Link
      href={href}
      className={twMerge(
        "flex cursor-pointer justify-center gap-2 transition",
        hover && "hover:text-neutral-500",
      )}
    >
      <Icon size={24} />
      <span className="hidden font-semibold md:block">{text}</span>
    </Link>
  );
};

export default LinkWithIcon;
