import { Skeleton } from "@/components/Skeleton";

export default function AddListingLoading() {
  return (
    <>
      <div className="flex flex-col gap-6 bg-orange-100 p-16">
        <h1 className="text-3xl font-bold tracking-wide">
          Add new item listing
        </h1>
        <Skeleton className="h-[260px] w-full" />
        <Skeleton className="h-[432px] w-full" />
        <Skeleton className="h-[324px] w-full" />
        <Skeleton className="h-[364px] w-full" />
        <Skeleton className="h-[96px] w-full" />
      </div>
    </>
  );
}
