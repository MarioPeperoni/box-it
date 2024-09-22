import LoadingSpinner from "@/components/LoadingSpinner";
import { Skeleton } from "@/components/Skeleton";

export default function ListingLoading() {
  return (
    <section className="flex justify-center bg-neutral-100 px-[3%] py-8">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-5 lg:flex-row">
          <div className="flex h-[500px] w-[700px] animate-pulse items-center justify-center bg-white">
            <LoadingSpinner />
          </div>
          <div className="flex flex-col gap-5 lg:w-[400px]">
            <Skeleton className="h-[116px]" />
            <Skeleton className="h-[192px]" />
            <Skeleton className="h-[88px]" />
          </div>
        </div>
        <Skeleton className="mx-[3%] h-[137px] w-full max-w-[1120px] self-center p-5" />
      </div>
    </section>
  );
}
