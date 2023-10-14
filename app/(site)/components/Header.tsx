import Image from "next/image";
import Link from "next/link";

import LinkWithIcon from "@/app/components/header/LinkWithIcon";
import CreateNewButton from "@/app/components/header/CreateNewButton";
import ProfileButton from "@/app/components/header/ProfileButton";

import getUser from "@/app/helpers/getUser";

import { FiHeart } from "react-icons/fi";

const Header = async () => {
  const user = await getUser();

  return (
    <header className="fixed top-0 w-full">
      <div className="flex items-center justify-around bg-neutral-50 py-2 shadow-md">
        <Link href="/">
          <Image src={"/boxIt.svg"} alt="logo" height={128} width={128} />
        </Link>
        <div className="flex items-center gap-3 md:gap-12">
          <div className="flex gap-5">
            <LinkWithIcon href="/loved" icon={FiHeart} text="" />
            <ProfileButton user={user} />
          </div>
          <CreateNewButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
