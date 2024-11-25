import { BlockHeader, DividerWithLogo } from "../components/BlockHeader";
import Spacer from "../components/ui/Spacer";
import QuandooBookingWidget from "../components/BookingWidget";
import { useTranslation } from "react-i18next";
import { ParallaxBanner } from "react-scroll-parallax";

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
          <div className="flex-1 font-times text-lg md:text-xl">
            <div className="flex flex-col justify-center items-center">
              <div className="font-serif text-gold-500 uppercase text-lg lg:text-xl">
                Ihre Anfrage
              </div>
              <DividerWithLogo px={"px-0"} />
            </div>
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
          </div>
          <div className="w-full md:flex-1 flex justify-center content-center pt-14">
            <QuandooBookingWidget />
          </div>
          <div className="flex-1 pt-10 lg:pt-0">
            <div className="flex flex-col justify-center items-center">
              <div className="font-serif text-gold-500 uppercase text-lg lg:text-xl">
                {t("footer.opening_hours")}
              </div>
              <DividerWithLogo px={"px-0"} />
            </div>
            <div className="font-times flex flex-col items-center  text-lg lg:text-xl">
              <div>{t("book.opening_hours.weekday_hours")}</div>
              {/*<div>{t("book.opening_hours.saturday_hours")}</div>*/}
              <Spacer size="lg" />
              <div>{t("book.opening_hours.kitchen_hours")}</div>
              <Spacer size="lg" />
              {/*<div>{t("book.opening_hours.terrace_menu_hours")}</div>*/}
              <div>{t("book.opening_hours.closed_days")}</div>
              <Spacer size="xl" />
              <div className="text-gold-500">
                {t("opening_hours_toast.title")}
              </div>
              <Spacer size="lg" />
              <div className="text-center">
                <p>{t("opening_hours_toast.line_1")}</p>
                <p>{t("opening_hours_toast.line_2")}</p>
                <p>{t("opening_hours_toast.line_4")}</p>
              </div>
              <Spacer size="lg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
