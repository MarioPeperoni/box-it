import Link from "next/link";

import { PiPlusBold } from "react-icons/pi";

const CreateNewButton = () => {
  return (
    <Link
      href={"/add-listing"}
      className="group rounded-full border-4 border-white bg-boxit-primary px-5 py-3 font-bold transition-all duration-300 hover:border-8 hover:border-boxit-primary hover:bg-white hover:px-4 hover:py-2 md:rounded-sm"
    >
      <PiPlusBold size={24} className="block md:hidden" />
      <span className="hidden md:block">Add new listing</span>
    </Link>
  );
};

export default CreateNewButton;
