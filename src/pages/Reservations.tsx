import Header from "../components/header/Header";
import { BlockHeader } from "../components/BlockHeader";
import { Footer } from "../components/Footer";
import Spacer from "../components/ui/Spacer";
import QuandooBookingWidget from "../components/BookingWidget";
import { useTranslation } from "react-i18next";

export function Reservations() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <div
        style={{
          backgroundImage: "url('/kalb-tables.jpg')",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
        className="relative bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center w-screen min-w-screen pt-72 pb-44 px-4 md:px-16 text-center"
      >
        <BlockHeader label={t("home.divider_1")} header={t("home.title_2")} />
        <div className="absolute inset-0 bg-black opacity-50 z-10" />
      </div>
      <div className="bg-white text-black py-16 md:py-32 px-4 md:px-16 text-center">
        <div className="mt-0 md:mt-10 flex flex-col md:flex-row justify-center items-start md:items-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="w-full md:flex-1 flex justify-center content-center">
            <QuandooBookingWidget />
          </div>
          <div className="flex-1 font-playfair italic text-lg md:text-xl text-center md:text-left">
            {t("book.text_1")}
            <Spacer size="md" />
            {t("book.text_2")}
            <Spacer size="md" />
            <a href="tel:+498923542290" className="text-l">
              +49 89 2354 2290
            </a>
            <Spacer size="lg" />
            {t("book.text_3")}
            <Spacer size="lg" />
            {t("book.text_4")}: <br />
            {t("book.text_5")}
            <Spacer size="lg" />
            {t("book.text_6")}
            <Spacer size="md" />
            {t("book.text_7")}
            <Spacer size="lg" />
            {t("book.text_8")}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
