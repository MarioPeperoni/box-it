import Link from "next/link";

import { PiPlusBold } from "react-icons/pi";

const CreateNewButton = () => {
  return (
    <Link
      href={"/add-listing"}
      className="group rounded-full border-8 border-transparent bg-boxit-primary px-3 py-1 font-bold transition-all duration-300 hover:border-8 hover:border-boxit-primary hover:bg-white md:rounded-sm"
    >
      <PiPlusBold size={24} className="block md:hidden" />
      <span className="hidden md:block">Add new listing</span>
    </Link>
  );
};

export default CreateNewButton;
