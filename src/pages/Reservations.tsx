import Header from "../components/header/Header";
import { BlockHeader } from "../components/BlockHeader";
import { Footer } from "../components/Footer";
import Spacer from "../components/ui/Spacer";
import QuandooBookingWidget from "../components/BookingWidget";

export function Reservations() {
  return (
    <>
      <Header />
      <div
        style={{
          backgroundImage: "url('/kalb-tables.jpg')",
        }}
        className="relative bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center w-screen min-w-screen pt-48 pb-24"
      >
        <BlockHeader
          label="Buchen Sie gleich ihren Tisch"
          header="RESERVIERUNG"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-10" />
      </div>
      <div className="bg-white text-black py-16 md:py-32 px-4 md:px-16 text-center">
        <div className="mt-0 md:mt-10 flex flex-col md:flex-row justify-center items-start md:items-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="w-full md:flex-1 flex justify-center content-center">
            <QuandooBookingWidget />
          </div>
          <div className="flex-1 font-playfair italic text-lg md:text-xl text-center md:text-left">
            Online können nur Tische bis 6 Personen reserviert werden.
            <Spacer size="md" />
            Tische ab 7 Personen bitte telefonisch reservieren unter
            <Spacer size="md" />
            <a href="tel:+498923542290" className="text-l">
              +49 89 2354 2290
            </a>
            <Spacer size="lg" />
            Andere Uhrzeiten als die vorgeschlagenen bitte ebenfalls telefonisch
            erfragen. Wir planen für Euren Besuch 2 1/2 Stunden ein.
            Reservierungen ab 20:00 Uhr sind zeitlich nicht begrenzt.
            <Spacer size="lg" />
            Öffnungszeiten: <br />
            Dienstag – Samstag von 17:00 Uhr bis 01:00 Uhr. Samstags ab 12:00
            Uhr.
            <Spacer size="lg" />
            Wir freuen uns auf Euren Besuch.
            <Spacer size="md" />
            Euer Team vom Goldenen Kalb
            <Spacer size="lg" />
            Sie werden über die erfolgreiche Reservierung per Email informiert.
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
