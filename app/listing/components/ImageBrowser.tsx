"use client";

import { useRef, useState } from "react";
import Image from "next/image";

import { twMerge } from "tailwind-merge";

import {
  BsFillArrowRightSquareFill,
  BsFillArrowLeftSquareFill,
} from "react-icons/bs";

interface ImageBrowserProps {
  images: string[];
}

const ImageBrowser: React.FC<ImageBrowserProps> = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const index = useRef(0);

  const handleClick = (direction: "right" | "left") => {
    if (direction === "right") {
      index.current++;
      setCurrentImage(images[index.current]);
    } else if (direction === "left") {
      index.current--;
      setCurrentImage(images[index.current]);
    }
  };

  return (
    <div className="group relative flex h-[500px] w-[700px] cursor-pointer select-none items-center overflow-hidden bg-white">
      <Image
        alt="Listing Image"
        src={currentImage}
        fill
        className="object-contain p-5"
      />
      <BsFillArrowRightSquareFill
        size={38}
        onClick={() => handleClick("right")}
        className={twMerge(
          "absolute right-0 mr-5 text-neutral-800 opacity-0 transition hover:scale-105 hover:text-black hover:opacity-100 group-hover:opacity-90",
          index.current === images.length - 1 && "hidden",
        )}
      />
      <BsFillArrowLeftSquareFill
        size={38}
        onClick={() => handleClick("left")}
        className={twMerge(
          "absolute left-0 ml-5 text-neutral-800 opacity-0 transition hover:scale-105 hover:text-black hover:opacity-100 group-hover:opacity-90",
          index.current === 0 && "hidden",
        )}
      />
      <p className="absolute bottom-2 left-1/2 -translate-x-1/2 transform rounded-lg bg-neutral-800 object-center p-2 px-4 font-light text-neutral-200 opacity-0 transition delay-75 duration-200 group-hover:opacity-80">
        {index.current + 1}/{images.length}
      </p>
    </div>
  );
};

export default ImageBrowser;
