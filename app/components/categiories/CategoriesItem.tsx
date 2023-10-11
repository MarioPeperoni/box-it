import Link from "next/link";

interface CategoriesItemProps {
  href: string;
  name: string;
  icon: any;
  colors: any;
}

const CategoriesItem: React.FC<CategoriesItemProps> = ({
  name,
  icon: Icon,
  href,
  colors,
}) => {
  return (
    <Link href={href}>
      <div
        className={`hover:shadow-boxit-primary group flex w-52 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 p-4 transition hover:bg-neutral-50 hover:shadow-md `}
      >
        <div
          className={`group flex h-20 w-20 items-center justify-center rounded-3xl ${colors.bg} transition ${colors.bgHover} group-hover:w-50 group-hover:h-50 group-hover:scale-105`}
        >
          <Icon size={48} className={`${colors.icon}`} />
        </div>
        <p className="pt-4 text-center font-semibold text-neutral-800">
          {name}
        </p>
      </div>
    </Link>
  );
};

export default CategoriesItem;
