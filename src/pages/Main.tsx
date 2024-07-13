import { useNavigate } from "react-router-dom";
import { BlockHeader } from "../components/BlockHeader";
import { FooterWithFire } from "../components/Footer";
import Header from "../components/header/Header";
import RotatingTextComponent from "../components/RoatatingText";

export function Main() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div
        style={{
          backgroundImage: "url('/zum-goldenen-kalb/kalb-bg-worldmap.jpg')",
        }}
        className="bg-no-repeat bg-cover bg-center h-screen pt-24 flex flex-col items-center justify-center min-h-screen"
      >
        <div className="absolute inset-0 bg-black opacity-40 z-10" />

        <img
          src={"/zum-goldenen-kalb/kalb-text.png"}
          className="logo w-full px-4 md:px-0 md:w-2/3 mx-32 mt-8 z-20"
          alt="Zum Goldenen Kalb"
        />
        <div className="h-0.5 my-8 w-4/5 md:w-2/3 bg-white z-20" />
        <button
          onClick={() => navigate("/reservations")}
          className="text-2xl w-48 h-16 bg-transparent border-2 border-white text-white relative overflow-hidden hover:bg-white hover:text-black transition-colors duration-300 z-20"
        >
          Reservieren
        </button>
      </div>
      <div
        id="about"
        className="bg-black text-white py-28 px-4 md:px-16 text-center"
      >
        <BlockHeader
          label="Grilled on HaJaTec's charcoal grill"
          header="FINEST STEAK & MORE"
        />
        <RotatingTextComponent />
      </div>
      <div
        style={{
          backgroundImage: "url('/zum-goldenen-kalb/kalb-tables.jpg')",
        }}
        className="relative bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center w-screen min-w-screen py-28 px-4 md:px-16 text-center"
      >
        <div className="absolute inset-0 bg-black opacity-50 z-10" />
        <BlockHeader
          label={"Steak & Entourage"}
          header={"UNSERE SPEISEKARTE"}
        />
        <button
          onClick={() => navigate("/menu")}
          className="mt-6 text-lg w-24 h-12 bg-transparent border border-white text-white relative overflow-hidden hover:bg-white hover:text-black transition-colors duration-300 z-20"
        >
          Menu
        </button>
      </div>
      <div className="bg-black text-white py-28 px-4 md:px-16 text-center">
        <BlockHeader
          label="Buchen Sie gleich ihren Tisch"
          header="RESERVIERUNG"
        />
        <div className="flex flex-col justify-center items-center">
          <div className="mt-10 font-playfair italic text-xl text-white">
            Rufen Sie uns an oder reservieren Sie Ihren Tisch gleich online.
          </div>
          <div className="mt-5 mb-10 font-playfair italic text-xl text-white">
            Lassen Sie es sich schmecken!
          </div>
          <a href="tel:+498923542290" className="text-lg text-white">
            Tel.: +49 89 2354 2290
          </a>
        </div>
        <button
          onClick={() => navigate("/reservations")}
          className="mt-16 text-lg w-64 h-12 bg-transparent border border-white text-white relative overflow-hidden hover:bg-white hover:text-black transition-colors duration-300 z-20"
        >
          Jetzt online reservieren
        </button>
      </div>
      <FooterWithFire />
    </>
  );
}
