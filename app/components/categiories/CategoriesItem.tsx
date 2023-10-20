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
    <Link href={`/listings?category=${name}`}>
      <div
        className={`center group flex w-[250px] cursor-pointer items-center justify-center gap-2 border-[1px] bg-white py-2 transition-all hover:bg-neutral-50 hover:shadow-md md:w-[300px] md:py-3`}
      >
        <Icon className={`${colors.icon} h-6 w-6 md:h-8 md:w-8`} />
        <span className="font-semibold text-neutral-800">{name}</span>
      </div>
    </Link>
  );
};

export default CategoriesItem;
