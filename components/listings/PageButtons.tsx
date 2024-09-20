import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface PageButtonsProps {
  page: number;
  setPage: (page: number) => void;
  numberOfListings: number;
}

const PageButtons: React.FC<PageButtonsProps> = ({
  page,
  setPage,
  numberOfListings,
}) => {
  const numberOfPages = Math.ceil(numberOfListings / 50);
  return (
    <div className="flex items-center justify-center gap-2 bg-white p-5">
      {page != 1 && (
        <FiChevronLeft
          size={28}
          className={"cursor-pointer transition hover:text-boxit-primary"}
          onClick={() => setPage(page - 1)}
        />
      )}
      {page - 2 > 0 && (
        <button
          className="h-9 w-9 rounded-full border-[4px] border-white bg-white font-semibold transition hover:border-boxit-primary"
          onClick={() => setPage(1)}
        >
          {1}
        </button>
      )}
      {page - 2 > 0 && <span className="px-2 font-semibold">...</span>}
      {page - 1 != 0 && (
        <button
          className="h-9 w-9 rounded-full border-[4px] border-white bg-white font-semibold transition hover:border-boxit-primary"
          onClick={() => setPage(page - 1)}
        >
          {page - 1}
        </button>
      )}
      <button className="h-10 w-10 rounded-full border-[6px] border-boxit-primary bg-boxit-primary font-bold transition hover:bg-white">
        {page}
      </button>
      {page + 1 != numberOfPages + 1 && (
        <button
          className="h-9 w-9 rounded-full border-[4px] border-white bg-white font-semibold transition hover:border-boxit-primary"
          onClick={() => setPage(page + 1)}
        >
          {page + 1}
        </button>
      )}
      {page + 2 < numberOfPages + 1 && (
        <span className="px-2 font-semibold">...</span>
      )}
      {page + 2 < numberOfPages + 1 && (
        <button
          className="h-9 w-9 rounded-full border-[4px] border-white bg-white font-semibold transition hover:border-boxit-primary"
          onClick={() => setPage(numberOfPages)}
        >
          {numberOfPages}
        </button>
      )}
      {page != numberOfPages && numberOfPages > 1 && (
        <FiChevronRight
          size={28}
          className={"cursor-pointer transition hover:text-boxit-primary"}
          onClick={() => setPage(page + 1)}
        />
      )}
    </div>
  );
};

export default PageButtons;
