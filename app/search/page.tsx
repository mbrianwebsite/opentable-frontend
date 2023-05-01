import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import RestaurantCard from "./components/RestaurantCard";
import SearchSideBar from "./components/SearchSideBar";

export default function search() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        {/* NAVBAR */}
        <NavBar />
        {/* NAVBAR */}
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
      </main>
    </main>
  );
}
