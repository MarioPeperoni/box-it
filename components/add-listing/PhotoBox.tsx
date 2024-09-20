import Image from "next/image";

import { CldUploadButton } from "next-cloudinary";
import { twMerge } from "tailwind-merge";

import { FiCamera } from "react-icons/fi";

interface PhotoBoxProps {
  photoUrl?: string;
  setPhoto: React.Dispatch<React.SetStateAction<string[]>>;
  thumbnail?: boolean;
  error?: any;
}

const PhotoBox: React.FC<PhotoBoxProps> = ({
  photoUrl,
  setPhoto,
  thumbnail,
  error,
}) => {
  const handleUpload = (result: any) => {
    if (photoUrl) {
      setPhoto((prev: string[]) => {
        return prev.map((url) =>
          url === photoUrl ? result.info.secure_url : url,
        );
      });
    } else {
      setPhoto((prev: string[]) => [...prev, result.info.secure_url]);
    }
  };
  return (
    <CldUploadButton
      options={{ maxFiles: 1, sources: ["local", "camera"] }}
      onUpload={handleUpload}
      uploadPreset="eka9am8x"
    >
      <div
        className={twMerge(
          "flex h-32 w-32 cursor-pointer flex-col items-center justify-center overflow-hidden bg-gray-100 transition hover:scale-105 hover:shadow-md lg:h-40 lg:w-40",
          error && "border-2 border-red-500",
        )}
      >
        {photoUrl ? (
          <>
            <Image alt="photo" src={photoUrl} width={160} height={160} />
          </>
        ) : (
          <>
            <FiCamera size={32} />
            <span className=" pt-2 text-sm font-light">Add photo</span>
          </>
        )}
      </div>
      {thumbnail &&
        photoUrl &&
        ((<div className=" bg-boxit-primary text-sm">Thumbnail</div>) as any)}
    </CldUploadButton>
  );
};

export default PhotoBox;
