import { useState } from "react";
import Header from "./components/Header";
import RotatingTextComponent from "./components/RoatatingText";
import { Footer } from "./components/Footer";

function BlockHeading({ label, header }: { label: string; header: string }) {
  return (
    <>
      <div className="flex items-center justify-center px-[25%] w-full z-20">
        <span className="flex-1 border-t border-gray-300"></span>
        <div className="mx-2 whitespace-nowrap text-md font-playfair italic tracking-widest text-gold-500">
          {label}
        </div>
        <span className="flex-1 border-t border-gray-300"></span>
      </div>
      <h1 className="text-white text-5xl font-bold text-center mt-8 mb-6 z-20">
        {header}
      </h1>
      <div className="flex items-center justify-center px-[25%] w-full z-20">
        <span className="flex-1 border-t border-gray-300"></span>
        <img
          src={"/zum-goldenen-kalb/kalb-head-gold.svg"}
          className="h-12 w-12"
          alt=""
        />
        <span className="flex-1 border-t border-gray-300"></span>
      </div>
    </>
  );
}

function MenuButton() {
  const [showPDF, setShowPDF] = useState(false);

  const togglePDF = () => {
    setShowPDF(!showPDF);
  };

  const path = "/zum-goldenen-kalb/ZGK_Speisekarte.pdf";

  return (
    <div>
      <button
        onClick={() => setShowPDF(true)}
        className="mt-6 text-lg w-24 h-12 bg-transparent border border-white text-white relative overflow-hidden hover:bg-white hover:text-black transition-colors duration-300 z-20"
      >
        Menu
      </button>
      {showPDF && (
        <div
          className="fixed inset-0 bg-black bg-opacity-35 z-50 flex justify-center items-center"
          onClick={togglePDF}
        >
          <iframe
            src={path}
            style={{ width: "min(80%, 750px)", height: "calc(100vh - 5rem)" }}
          />
        </div>
      )}
    </div>
  );
}

function App() {
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
        {/* Overlay div */}

        <img
          src={"/zum-goldenen-kalb/kalb-text.png"}
          className="logo w-2/3 mx-32 mt-8 z-20"
          alt="Zum Goldenen Kalb"
        />
        <div className="h-0.5 my-8 w-2/3 bg-white z-20" />
        <button className="text-2xl w-48 h-16 bg-transparent border-2 border-white text-white relative overflow-hidden hover:bg-white hover:text-black transition-colors duration-300 z-20">
          Reservieren
        </button>
      </div>
      <div className="bg-black text-white my-16 p-16 text-center">
        <BlockHeading
          label="Grilled on HaJaTec's charcoal grill"
          header="FINEST STEAK & MORE"
        />
        <RotatingTextComponent />
      </div>
      <div
        style={{
          backgroundImage: "url('/zum-goldenen-kalb/kalb-tables.jpg')",
        }}
        className="relative bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center w-screen min-w-screen py-24"
      >
        <div className="absolute inset-0 bg-black opacity-50 z-10" />
        <BlockHeading
          label={"Steak & Entourage"}
          header={"UNSERE SPEISEKARTE"}
        />
        <MenuButton />
      </div>
      <div className="bg-black text-white my-16 p-16 text-center">
        <BlockHeading
          label="Buchen Sie gleich ihren Tisch	"
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
            Tel.: +49 (0)/89 23 54 22 90
          </a>
        </div>
        <button className="mt-16 text-lg w-64 h-12 bg-transparent border border-white text-white relative overflow-hidden hover:bg-white hover:text-black transition-colors duration-300 z-20">
          Jetzt online reservieren
        </button>
      </div>
      <Footer />
    </>
  );
}

export default App;
