import Header from "./components/Header";
import Card from "./components/Card";

export default function Home() {
  return (
    <main>
      {/* HEADER */}
      <Header />
      {/* HEADER */}
      {/* CARDS */}
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-start">
        {/* CARD */}
        <Card />
        {/* CARD */}
      </div>
      {/* CARDS */}
    </main>
  );
}
