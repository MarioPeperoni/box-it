import CategoriesDisplay from "../components/categiories/CategoriesDisplay";
import RecentItems from "../components/items-display/RecentItems";
import SearchBox from "./components/SearchBox";

const Home = () => {
  return (
    <>
      <SearchBox />
      <CategoriesDisplay />
      <RecentItems />
    </>
  );
};

export default Home;
