import { PiWarningCircleBold } from "react-icons/pi";

interface BigErrorBoxProps {
  error: string | null;
}

const BigErrorBox: React.FC<BigErrorBoxProps> = ({ error }) => {
  return error ? (
    <div
      className={
        "flex gap-2 rounded-md border-2 border-red-800 bg-red-200 p-3 font-semibold text-red-800 shadow-lg"
      }
    >
      <PiWarningCircleBold size={24} />
      <p>{error}</p>
    </div>
  ) : null;
};

export default BigErrorBox;
