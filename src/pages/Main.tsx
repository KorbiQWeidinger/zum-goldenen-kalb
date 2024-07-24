import { useNavigate } from "react-router-dom";
import { BlockHeader } from "../components/BlockHeader";
import Header from "../components/header/Header";
import RotatingTextComponent from "../components/RoatatingText";
import { Footer } from "../components/Footer";
import { useTranslation } from "react-i18next";
import { ParallaxBanner } from "react-scroll-parallax";
import Spacer from "../components/ui/Spacer";

export function Main() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <ParallaxBanner
        layers={[{ image: "/kalb-bg-worldmap.jpg", speed: -25 }]}
        className="bg-center h-screen pt-24 flex flex-col items-center justify-center min-h-screen"
      >
        <div className="absolute inset-0 bg-black opacity-40 z-10" />
        <img
          src={"/kalb-text.png"}
          className="logo w-full px-4 md:px-0 md:w-2/3 mx-32 mt-8 z-20"
          alt="Zum Goldenen Kalb"
        />
        <Spacer size="xl" />
        <Spacer size="xl" />
        <button
          onClick={() => navigate("/reservations")}
          className="text-2xl w-48 h-16 bg-transparent border-2 border-white text-white relative overflow-hidden hover:bg-white hover:text-black transition-colors duration-300 z-20"
        >
          {t("home.buttons.reservations")}
        </button>
        x
      </ParallaxBanner>
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
      <ParallaxBanner
        layers={[{ image: "/kalb-tables.jpg", speed: -25 }]}
        className="relative flex flex-col items-center justify-center w-screen min-w-screen py-28 px-4 md:px-16 text-center"
      >
        <div className="absolute inset-0 bg-black opacity-50 z-10" />
        <BlockHeader label={"Steak & Entourage"} header={t("home.title_1")} />
        <button
          onClick={() => navigate("/menu")}
          className="mt-6 text-lg w-24 h-12 bg-transparent border border-white text-white relative overflow-hidden hover:bg-white hover:text-black transition-colors duration-300 z-20"
        >
          {t("home.buttons.menu")}
        </button>
      </ParallaxBanner>
      <div className="bg-black text-white py-28 px-4 md:px-16 text-center">
        <BlockHeader label={t("home.divider_1")} header={t("home.title_2")} />
        <div className="flex flex-col justify-center items-center">
          <div className="mt-10 font-playfair italic text-xl text-white">
            {t("home.text_3")}
          </div>
          <div className="mt-5 mb-10 font-playfair italic text-xl text-white">
            {t("home.text_4")}
          </div>
          <a href="tel:+498923542290" className="text-lg text-white">
            +49 89 2354 2290
          </a>
        </div>
        <button
          onClick={() => navigate("/reservations")}
          className="mt-16 text-lg w-64 h-12 bg-transparent border border-white text-white relative overflow-hidden hover:bg-white hover:text-black transition-colors duration-300 z-20"
        >
          {t("home.buttons.book")}
        </button>
      </div>
      <Footer />
    </>
  );
}
