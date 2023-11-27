"use client";

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

import Button from "./Button";

interface WebInfoBoxProps {
  children: React.ReactNode;
  className?: string;
  buttonText?: string;
  action?: "redirect" | "back" | "refresh";
  href?: string;
}

const WebInfoBox: React.FC<WebInfoBoxProps> = ({
  children,
  className,
  buttonText,
  action,
  href,
}) => {
  const router = useRouter();
  const buttonFunction = () => {
    switch (action) {
      case "redirect":
        if (!href) return;
        router.push(href!);
        break;
      case "back":
        router.back();
        break;
      case "refresh":
        router.refresh();
        break;
      default:
        router.back();
        break;
    }
  };
  return (
    <div className="h-full justify-center bg-neutral-100 px-[10%] py-8">
      <div
        className={twMerge(
          "flex flex-none flex-col items-center bg-white p-20 py-10",
          className,
        )}
      >
        {children}
        <Button
          type={"button"}
          className="mt-5 border-boxit-primary hover:scale-105"
          onClick={() => buttonFunction()}
        >
          <p className="text-xl">{buttonText ? buttonText : "Go back"}</p>
        </Button>
      </div>
    </div>
  );
};

export default WebInfoBox;
