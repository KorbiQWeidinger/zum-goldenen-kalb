import { BlockHeader, DividerWithLogo } from "../components/BlockHeader";
import Spacer from "../components/ui/Spacer";
import { useTranslation } from "react-i18next";
import { ParallaxBanner } from "react-scroll-parallax";
import { OpenTableBookingWidget } from "@/components/OpenTableBookingWidget";
import { ReactNode } from "react";

// Reusable section header component
const SectionHeader = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="font-serif text-gold-500 uppercase text-lg lg:text-xl">
        {title}
      </div>
      <DividerWithLogo px={"px-0"} />
    </div>
  );
};

// Reusable info section component
const InfoSection = ({
  title,
  children,
  className = "",
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={`flex-1 ${className}`}>
      <SectionHeader title={title} />
      <div className="mt-5">{children}</div>
    </div>
  );
};

export function Reservations() {
  const { t } = useTranslation();

  return (
    <>
      <ParallaxBanner
        layers={[{ image: "/kalb-tables.jpg", speed: -25 }]}
        className="relative bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center w-screen min-w-screen pt-56 pb-32 px-4 md:px-16 text-center"
      >
        <BlockHeader label={t("home.divider_1")} header={t("home.title_2")} />
        <div className="absolute inset-0 bg-black opacity-50 z-10" />
      </ParallaxBanner>

      <div className="bg-white text-black py-16 md:py-16 px-4 md:px-16 text-center">
        <div className="mt-0 md:mt-10 flex flex-col lg:flex-row items-center lg:items-start space-y-8 md:space-y-0 md:space-x-8">
          {/* Request Information Section */}
          <InfoSection
            title={t("book.your_request")}
            className="font-times text-lg md:text-xl"
          >
            <>
              {t("book.text_1")}
              <Spacer size="md" />
              {t("book.text_2")}
              <br />
              <a href="tel:+498923542290">+49 89 2354 2290</a>
              <Spacer size="lg" />
              {t("book.text_3")}
              <Spacer size="lg" />
              {t("book.text_4")}
              <br />
              {t("book.text_5")}
              <Spacer size="lg" />
              {t("book.text_7")}
              <Spacer size="md" />
              {t("book.text_6")}
            </>
          </InfoSection>

          {/* Reservation Widget Section */}
          <InfoSection title={t("book.reserve")} className="pt-10 lg:pt-0">
            <div className="flex justify-center content-center">
              <OpenTableBookingWidget />
            </div>
          </InfoSection>

          {/* Opening Hours Section */}
          <InfoSection
            title={t("openingHours.title")}
            className="pt-10 lg:pt-0"
          >
            <div className="font-times flex flex-col items-center text-lg lg:text-xl">
              <div>{t("openingHours.regularHours.open")}</div>
              <div>{t("openingHours.regularHours.kitchen_hours")}</div>
              <div>{t("openingHours.regularHours.closed")}</div>
              <div>{t("openingHours.regularHours.summer")}</div>

              <Spacer size="xl" />

              <SectionHeader title={t("openingHours.specialHours.title")} />

              <div className="text-lg lg:text-xl">
                <div>{t("openingHours.specialHours.carnivalParty")}</div>
                <Spacer size="sm" />
                <div>{t("openingHours.specialHours.bauma")}</div>
                <Spacer size="sm" />
                <div>{t("openingHours.specialHours.laborDay")}</div>
                <Spacer size="sm" />
                <div>{t("openingHours.specialHours.logisticExpo")}</div>
                <Spacer size="sm" />
                <div>{t("openingHours.specialHours.expo")}</div>
                <Spacer size="sm" />
                <div>{t("openingHours.specialHours.decemberMondays")}</div>
              </div>
            </div>
          </InfoSection>
        </div>
      </div>
    </>
  );
}
