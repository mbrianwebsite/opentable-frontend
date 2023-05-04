import NavBar from "@/app/components/NavBar";
import Header from "./components/Header";
import Form from "./components/Form";

export default function Reservation() {
  return (
    <>
      <div className="border-t h-screen">
        <div className="py-9 w-3/5 m-auto">
          {/* HEADER */}
          <Header />
          {/* HEADER */}
          {/* FORM */}
          <Form />
          {/* FORM */}
        </div>
      </div>
    </>
  );
}
