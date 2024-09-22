"use client";

import { useRouter } from "next/navigation";

import Button from "@/components/Button";

import { BsCheckCircleFill } from "react-icons/bs";

const SuccessPage = () => {
  const router = useRouter();

  return (
    <div className="my-10 flex flex-col items-center justify-center bg-orange-100 p-10 md:mx-[25%] md:my-[15%]">
      <BsCheckCircleFill size={48} className="text-boxit-primary" />
      <h1 className="mt-1 text-3xl">All done!</h1>
      <p className="mb-2 mt-3 text-center text-lg">
        Your listing will soon be visible to everyone!
      </p>
      <Button
        type={"button"}
        primary
        onClick={() => {
          router.replace("/profile/listings");
        }}
      >
        Show my listings
      </Button>
    </div>
  );
};

export default SuccessPage;
