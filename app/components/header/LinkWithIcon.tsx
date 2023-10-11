import Link from "next/link";

interface LinkWithIconProps {
  href: string;
  text: string;
  icon: any;
}

const LinkWithIcon: React.FC<LinkWithIconProps> = ({
  href,
  icon: Icon,
  text,
}) => {
  return (
    <Link
      href={href}
      className="flex cursor-pointer justify-center gap-2 transition hover:text-neutral-500"
    >
      <Icon size={24} />
      <span className="font-semibold">{text}</span>
    </Link>
  );
};

export default LinkWithIcon;
