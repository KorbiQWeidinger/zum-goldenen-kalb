import Header from "./components/Header";

function App() {
  return (
    <div
      style={{
        backgroundImage: "url('/zum-goldenen-kalb/kalb-bg-worldmap.jpg')",
      }}
      className="bg-no-repeat bg-cover bg-center h-screen pt-24 flex flex-col items-center justify-center min-h-screen"
    >
      <div className="absolute inset-0 bg-black opacity-40 z-10" />
      {/* Overlay div */}
      <Header />
      <img
        src={"/zum-goldenen-kalb/kalb-text.png"}
        className="logo w-2/3 mx-32 mt-8 z-20"
        alt="Zum Goldenen Kalb"
      />
    </div>
  );
}

export default App;
