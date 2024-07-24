import Header from "../components/header/Header";
import { BlockHeader } from "../components/BlockHeader";
import { Footer } from "../components/Footer";
import Spacer from "../components/ui/Spacer";
import { ParallaxBanner } from "react-scroll-parallax";

export function Impressum() {
  return (
    <>
      <Header />
      <ParallaxBanner
        layers={[{ image: "/kalb-bg-worldmap.jpg", speed: -25 }]}
        className="relative bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center w-screen min-w-screen pt-72 pb-44 px-4 md:px-16 text-center"
      >
        <BlockHeader label="Kontakt & Impressum" header="IMPRESSUM" />
        <div className="absolute inset-0 bg-black opacity-50 z-10" />
      </ParallaxBanner>
      <div className="bg-black text-white py-16 md:py-24 px-4 md:px-16 text-center">
        <div className="mt-0 flex flex-col md:flex-row justify-center items-start md:items-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="flex-1 text-lg md:text-xl text-left">
            FM Gastronomie GmbH
            <br />
            Geschäftsführer Ferenc Barbay und Markus Kirchberger
            <br />
            Utzschneiderstraße 1 80469 München
            <Spacer size="lg" />
            HRB: 293530
            <br />
            USt.-Id. Nr.: DE368612708
            <Spacer size="lg" />
            <p className="font-semibold">Öffnungszeiten: </p>
            Di – Fr: 17:00 Uhr – 01:00 Uhr <br />
            Samstags ab 12:00 Uhr <br />
            Sonntag und Montag Ruhetag
            <Spacer size="lg" />
            <p className="font-semibold">
              Inhaltlich Verantwortliche gemäß § 10 Absatz 3 MDStV:
            </p>
            Ferenc Barbay und Markus Kirchberger
            <Spacer size="lg" />
            Tel.: <a href="tel:+498923542290">+49 89 2354 2290</a> <br />
            E-Mail: info@zumgoldenenkalb.de <br />
            www: www.zumgoldenenkalb.de
            <Spacer size="lg" />
            <p className="font-semibold">Technische Realisierung</p>
            Falls nicht anders angegeben, unterliegen alle Seiten Web-Angebots
            von FM Gastronomie GmbH dem Urheberrecht (Copyright). Dies gilt
            insbesondere für Texte, Bilder, Grafiken, Ton-, Video- oder
            Animationsdateien einschließlich deren Anordnung auf den Web-Seiten.
            Eine Vervielfältigung oder Verwendung solcher Seiten (oder Teilen
            davon) in anderen elektronischen oder gedruckten Publikationen und
            deren Veröffentlichung (auch im Internet) ist nur nach vorheriger
            Genehmigung gestattet. Der Nachdruck und die Auswertung von
            Pressemitteilungen und Reden ist mit Quellenangabe natürlich
            gestattet. Die Genehmigung zur Publikation der Webseiten kann FM
            Gastronomie GmbH erteilen. Weiterhin können Bilder, Grafiken, Text-
            oder sonstige Dateien ganz oder teilweise dem Urheberrecht Dritter
            unterliegen.
            <Spacer size="lg" />
            Alle innerhalb des Internetangebotes genannten und ggf. durch Dritte
            geschützten Marken- und Warenzeichen unterliegen uneingeschränkt den
            Bestimmungen des jeweils gültigen Kennzeichenrechts und den
            Besitzrechten der jeweiligen eingetragenen Eigentümer. Allein
            aufgrund der bloßen Nennung in unserem Internetangebot ist nicht der
            Schluss zu ziehen, dass Markenzeichen nicht durch Rechte Dritter
            geschützt sind.
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
