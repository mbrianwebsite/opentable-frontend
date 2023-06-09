import Menu from "./components/Menu";
import RestaurantNavbar from "./components/RestaurantNavbar";

export default function RestaurantMenu() {
  return (
    <>
      {/* DESCRIPTION PORTION */}
      <div className="bg-white w-[100%] rounded p-3 shadow">
        {/* RESAURANT NAVBAR */}
        <RestaurantNavbar />
        {/* RESAURANT NAVBAR */}
        {/* MENU */}
        <Menu />
        {/* MENU */}
      </div>
      {/* DESCRIPTION PORTION */}
    </>
  );
}
