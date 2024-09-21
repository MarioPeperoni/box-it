import LoadingSpinner from "@/components/LoadingSpinner";
import SearchBox from "@/components/SearchBox";

export default function ListingsLoading() {
  return (
    <section>
      <SearchBox />
      <section className="flex flex-col items-center justify-center gap-4 bg-neutral-100 px-[8%] py-5">
        <LoadingSpinner />
      </section>
    </section>
  );
}
