import SearchBar from "../components/SearchBar";
import RestaurantCard from "./components/RestaurantCard";
import SearchSideBar from "./components/SearchSideBar";

export default function search() {
  return (
    <>
      {/* HEADER */}
      <div className="bg-gradient-to-r to-[#5f6984] from-[#0f1f47] p-2">
        <SearchBar />
      </div>
      {/* HEADER */}
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        {/* SEARCH SIDE BAR */}
        <SearchSideBar />
        {/* SEARCH SIDE BAR */}
        <div className="w-5/6">
          {/* RESAURANT CARD */}
          <RestaurantCard />
          {/* RESAURANT CARD */}
        </div>
      </div>
    </>
  );
}
