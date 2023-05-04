import NavBar from "@/app/components/NavBar";
import Header from "./components/Header";
import Title from "./components/Title";
import Rating from "./components/Rating";
import Description from "./components/Description";
import Images from "./components/Images";
import Reviews from "./components/Reviews";
import ReservationForm from "./components/ReservationForm";
import RestaurantNavbar from "./components/RestaurantNavbar";

export default function RestaurantDetails() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        {/* NAVBAR */}
        <NavBar />
        {/* NAVBAR */}
        {/* HEADER */}
        <Header />
        {/* HEADER */}
        {/* DESCRIPTION PORTION */}
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[70%] rounded p-3 shadow">
            {/* RESAURANT NAVBAR */}
            <RestaurantNavbar />
            {/* RESAURANT NAVBAR */}
            {/* TITLE */}
            <Title />
            {/* TITLE */}
            {/* RATING */}
            <Rating />
            {/* RATING */}
            {/* DESCRIPTION */}
            <Description />
            {/* DESCRIPTION */}
            {/* IMAGES */}
            <Images />
            {/* IMAGES */}
            {/* REVIEWS */}
            <Reviews />
            {/* REVIEWS */}
          </div>
          {/* RESERVATION CARD PORTION */}
          <ReservationForm />
          {/* RESERVATION CARD PORTION */}{" "}
        </div>
        {/* DESCRIPTION PORTION */}
      </main>
    </main>
  );
}
