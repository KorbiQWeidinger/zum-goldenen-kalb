import { useNavigate } from "react-router-dom";
import { BlockHeader } from "../components/BlockHeader";
import RotatingTextComponent from "../components/RoatatingText";
import { useTranslation } from "react-i18next";
import { ParallaxBanner } from "react-scroll-parallax";
import Spacer from "../components/ui/Spacer";
import { ReviewCarousel } from "@/components/ReviewCarousel";

export function Main() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      {/* SEO Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "VideoObject",
          name: "Zum Goldenen Kalb – Experience Our Steakhouse",
          description:
            "Take a virtual tour of our New York-style steakhouse at Viktualienmarkt.",
          thumbnailUrl:
            "https://www.zumgoldenenkalb.de/images/kalb-bg-worldmap.jpg",
          uploadDate: "2023-10-01",
          contentUrl: "https://www.zumgoldenenkalb.de/kalb-main-video.mp4",
          embedUrl: "https://www.zumgoldenenkalb.de/",
          publisher: {
            "@type": "Organization",
            name: "Zum Goldenen Kalb",
            logo: {
              "@type": "ImageObject",
              url: "https://www.zumgoldenenkalb.de/kalb-head-gold-square.png",
            },
          },
        })}
      </script>
      <ParallaxBanner
        layers={[
          {
            speed: -25,
            children: (
              <video
                src="/kalb-main-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ),
          },
        ]}
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
        className="bg-black text-white py-44 px-4 md:px-16 text-center"
      >
        <BlockHeader
          label="Grilled on HaJaTec's charcoal grill"
          header="FINEST STEAK & MORE"
        />
        <RotatingTextComponent />
      </div>
      <ParallaxBanner
        layers={[{ image: "/kalb-tables.jpg", speed: -25 }]}
        className="relative flex flex-col items-center justify-center w-screen min-w-screen py-44 px-4 md:px-16 text-center"
      >
        <div className="absolute inset-0 bg-black opacity-40 z-10" />
        <BlockHeader label={"Steak & Entourage"} header={t("home.title_1")} />
        <button
          onClick={() => navigate("/menu")}
          className="mt-16 text-lg w-24 h-12 bg-transparent border border-white text-white relative overflow-hidden hover:bg-white hover:text-black transition-colors duration-300 z-20"
        >
          {t("home.buttons.menu")}
        </button>
      </ParallaxBanner>
      <div className="bg-black text-white py-44 px-4 md:px-16 text-center">
        <BlockHeader label={t("home.divider_1")} header={t("home.title_2")} />
        <div className="flex flex-col justify-center items-center">
          <div className="mt-10 font-times italic text-xl text-white">
            {t("home.text_3")}
          </div>
          <div className="mt-5 mb-10 font-times italic text-xl text-white">
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
      <ParallaxBanner
        layers={[{ image: "/meats_2.jpg", speed: -25 }]}
        className="relative flex flex-col items-center justify-center w-screen min-w-screen py-44 px-4 md:px-16 text-center"
      >
        <div className="absolute inset-0 bg-black opacity-40 z-10" />
        <BlockHeader
          label={t("header.meats")}
          header={t("header.reifeschrank")}
        />
        <button
          onClick={() => navigate("/dry-aging-cabinet")}
          className="mt-16 text-lg px-6 h-12 bg-transparent border border-white text-white relative overflow-hidden hover:bg-white hover:text-black transition-colors duration-300 z-20"
        >
          {t("header.reifeschrank")}
        </button>
      </ParallaxBanner>
      <div className="bg-black text-white pt-44 pb-24 text-center">
        <div className="px-4 md:px-16">
          <BlockHeader
            label={t("home.our_guests")}
            header={t("home.reviews")}
          />
        </div>
        <Spacer size="xl" />
        <ReviewCarousel />
      </div>
    </>
  );
}
