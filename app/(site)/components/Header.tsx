import Image from "next/image";
import Link from "next/link";

import LinkWithIcon from "@/app/components/header/LinkWithIcon";
import CreateNewButton from "@/app/components/header/CreateNewButton";

import { FiHeart, FiUser } from "react-icons/fi";

const Header = () => {
  return (
    <header className="fixed top-0 w-full">
      <div className="flex items-center justify-around bg-neutral-50 py-5 shadow-md">
        <Link href="/">
          <Image src={"/boxIt.svg"} alt="logo" height={128} width={128} />
        </Link>
        <div className=" flex gap-12">
          <div className="flex gap-5">
            <LinkWithIcon href="/loved" icon={FiHeart} text="" />
            <LinkWithIcon href="/login" icon={FiUser} text="Your account" />
          </div>
          <CreateNewButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
