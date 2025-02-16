import { BlockHeader } from "../components/BlockHeader";
import { ParallaxBanner } from "react-scroll-parallax";
import { useTranslation } from "react-i18next";

export function OpeningHours() {
  const { t } = useTranslation();

  return (
    <>
      <ParallaxBanner
        layers={[{ image: "/kalb-bg-worldmap.jpg", speed: -25 }]}
        className="relative bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center w-screen min-w-screen pt-64 pb-40 px-4 md:px-16 text-center"
      >
        <BlockHeader
          label={t("openingHours.title")}
          header={t("openingHours.title")}
        />
        <div className="absolute inset-0 bg-black opacity-50 z-10" />
      </ParallaxBanner>
      <div className="bg-black text-white py-44 px-4 md:px-16 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="text-gold-500 text-lg mb-8">
            <p className="mb-4 uppercase">{t("openingHours.title")}</p>
            <p className="mb-2">{t("openingHours.regularHours.open")}</p>
            <p className="mb-2">
              {t("openingHours.regularHours.kitchen_hours")}
            </p>
            <p className="mb-2">{t("openingHours.regularHours.closed")}</p>
            <p className="mb-2">{t("openingHours.regularHours.summer")}</p>
          </div>
          <div className="text-gold-500 text-lg mt-16">
            <p className="mb-4 uppercase">
              {t("openingHours.specialHours.title")}
            </p>
            <p className="mb-2">
              {t("openingHours.specialHours.carnivalParty")}
            </p>
            <p className="mb-2">{t("openingHours.specialHours.bauma")}</p>
            <p className="mb-2">{t("openingHours.specialHours.laborDay")}</p>
            <p className="mb-2">{t("openingHours.specialHours.expo")}</p>
            <p className="mb-2">
              {t("openingHours.specialHours.decemberMondays")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
