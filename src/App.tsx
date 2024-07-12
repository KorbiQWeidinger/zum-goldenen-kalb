import Header from "./components/Header";
import RotatingTextComponent from "./components/RoatatingText";

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
      <div className="bg-black text-white p-16 text-center">
        <div className="flex items-center justify-center mx-[25%]">
          <span className="flex-1 border-t border-gray-500"></span>
          <div className="mx-2 whitespace-nowrap text-md font-playfair italic tracking-widest text-gold-500">
            Grilled on HaJaTec's charcoal grill
          </div>
          <span className="flex-1 border-t border-gray-500"></span>
        </div>
        <h1 className="text-5xl font-bold mt-8 mb-6">FINEST STEAK & MORE</h1>
        <div className="flex justify-center items-center mb-4 mx-[25%]">
          <span className="block w-full border-t border-gray-500 mr-2"></span>
          <img
            src={"/zum-goldenen-kalb/kalb-head-gold.svg"}
            className="h-12 w-12"
            alt="Vite logo"
          />
          <span className="block w-full border-t border-gray-500 ml-2"></span>
        </div>
        <RotatingTextComponent />
      </div>
    </>
  );
}

export default App;
