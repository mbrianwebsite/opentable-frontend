import Title from "./components/Title";
import Rating from "./components/Rating";
import Description from "./components/Description";
import Images from "./components/Images";
import Reviews from "./components/Reviews";
import ReservationForm from "./components/ReservationForm";
import RestaurantNavbar from "./components/RestaurantNavbar";

export default function RestaurantDetails() {
  return (
    <>
      {/* DESCRIPTION PORTION */}
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
      {/* RESERVATION CARD PORTION */} {/* DESCRIPTION PORTION */}
    </>
  );
}
