import LoadingSpinner from "@/components/LoadingSpinner";
import { Skeleton } from "@/components/Skeleton";

export default function LoginLoading() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-orange-100">
      <div className="flex h-[456px] w-[90%] items-center justify-center bg-white p-10 lg:w-[600px]">
        <LoadingSpinner className={"h-16 w-16"} />
      </div>
    </div>
  );
}
