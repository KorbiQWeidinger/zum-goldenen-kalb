import { ParallaxBanner } from "react-scroll-parallax";
import { BlockHeader } from "../components/BlockHeader";
import Spacer from "../components/ui/Spacer";

export const AGB = () => {
  return (
    <>
      <ParallaxBanner
        layers={[{ image: "/kalb-bg-worldmap.jpg", speed: -25 }]}
        className="relative bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center w-screen min-w-screen pt-72 pb-44 px-4 md:px-16 text-center"
      >
        <BlockHeader label="AGB & Datenschutzerklärung" header="RECHTLICHES" />
        <div className="absolute inset-0 bg-black opacity-50 z-10" />
      </ParallaxBanner>
      <div className="bg-black text-white py-32 md:py-24 px-4 md:px-16 text-center">
        <Spacer size="lg" />
        <div className="text-left max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">
            Allgemeine Geschäftsbedingungen (AGB)
          </h1>
          <p className="mb-4">
            Zum Goldenen Kalb
            <br />
            FM Gastronomie GmbH
            <br />
            Utzschneiderstraße 1
            <br />
            80469 München
            <br />
            Stand: Januar 2024
          </p>

          <h2 className="text-2xl font-bold mb-4">1. Geltungsbereich</h2>
          <p className="mb-4">
            1.1 Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für
            sämtliche Verträge, Reservierungen, Bestellungen und
            Dienstleistungen zwischen dem Zum Goldenen Kalb (im Folgenden
            "Restaurant") und seinen Gästen oder Geschäftspartnern.
          </p>
          <p className="mb-4">
            1.2 Abweichende Geschäftsbedingungen des Gastes oder Dritter finden
            keine Anwendung, es sei denn, das Restaurant hat diesen ausdrücklich
            schriftlich zugestimmt.
          </p>

          <h2 className="text-2xl font-bold mb-4">
            2. Öffnungszeiten und Reservierungen
          </h2>
          <p className="mb-4">
            2.1 Die aktuellen Öffnungszeiten sind auf der Website
            www.zumgoldenenkalb.de und am Restaurant-Eingang ausgeschrieben.
            Änderungen vorbehalten.
          </p>
          <p className="mb-4">
            2.2 Reservierungen können telefonisch, online oder persönlich
            erfolgen.
          </p>
          <p className="mb-4">
            2.3 Das Restaurant behält sich vor, Reservierungen nach einer
            Toleranzzeit von 15 Minuten für andere Gäste freizugeben, sofern
            keine rechtzeitige Benachrichtigung durch den Gast erfolgt.
          </p>
          <p className="mb-4">
            2.4 Gruppenreservierungen ab 8 Personen erfordern eine Bestätigung
            per E-Mail und ggf. eine Anzahlung.
          </p>

          <h2 className="text-2xl font-bold mb-4">
            3. Stornierung und No-Show-Regelung
          </h2>
          <p className="mb-4">
            3.1 Reservierungen können bis 24 Stunden vor dem Termin kostenfrei
            storniert werden.
          </p>
          <p className="mb-4">
            3.2 Für Gruppenreservierungen ab 8 Personen kann eine Stornogebühr
            von 50% des zu erwartenden Umsatzes berechnet werden, falls die
            Absage nicht spätestens 48 Stunden vor dem Reservierungstermin
            erfolgt.
          </p>
          <p className="mb-4">
            3.3 Bei Nichterscheinen ("No-Show") ohne vorherige Absage kann das
            Restaurant eine Gebühr von 45 € pro Person in Rechnung stellen.
          </p>

          <h2 className="text-2xl font-bold mb-4">
            4. Hausordnung und Verhalten im Restaurant
          </h2>
          <p className="mb-4">
            4.1 Gäste sind verpflichtet, sich respektvoll gegenüber dem Personal
            und anderen Gästen zu verhalten.
          </p>
          <p className="mb-4">
            4.2 Das Restaurant behält sich vor, Gäste, die sich störend
            verhalten, unter Alkohol- oder Drogeneinfluss stehen oder gegen die
            Hausordnung verstoßen, des Hauses zu verweisen.
          </p>
          <p className="mb-4">
            4.3 Das Mitbringen von Speisen und Getränken ist nicht gestattet, es
            sei denn, es wurde vorher ausdrücklich genehmigt (z. B. Sonderfälle
            wie Geburtstagskuchen).
          </p>
          <p className="mb-4">
            4.5 Das mitbringen von Hunden ist gestattet sofern diese an der
            Leine gehalten werden und sich unter dem Tisch aufhalten.
            Freilaufende Tiere und Tiere auf den Sitzflächen sind nicht
            gestattet.
          </p>

          <h2 className="text-2xl font-bold mb-4">
            5. Zahlungsmöglichkeiten und Preise
          </h2>
          <p className="mb-4">
            5.1 Die Preise sind in Euro (€) und enthalten die gesetzliche
            Mehrwertsteuer.
          </p>
          <p className="mb-4">
            5.2 Akzeptierte Zahlungsmittel sind Bargeld, EC-Karte, Kreditkarten
            (Visa, Mastercard, American Express) und ggf. digitale
            Zahlungsmethoden wie Apple Pay oder Google Pay.
          </p>
          <p className="mb-4">
            5.3 Das Restaurant behält sich vor, bei hohen Rechnungsbeträgen eine
            Vorauszahlung oder Anzahlung zu verlangen.
          </p>

          <h2 className="text-2xl font-bold mb-4">6. Gutscheine und Rabatte</h2>
          <p className="mb-4">
            6.1 Gutscheine sind nur in dem auf ihnen angegebenen Zeitraum gültig
            und nicht gegen Bargeld einlösbar.
          </p>
          <p className="mb-4">
            6.2 Rabattaktionen können nicht miteinander kombiniert werden.
          </p>
          <p className="mb-4">
            6.3 Online oder Telefonisch ausgestellte Gutscheine können gegen
            eine Bearbeitungsgebühr zugesendet werden.
          </p>

          <h2 className="text-2xl font-bold mb-4">
            7. Allergene und Unverträglichkeiten
          </h2>
          <p className="mb-4">
            7.1 Das Restaurant bietet eine Übersicht über mögliche Allergene in
            den Speisen an.
          </p>
          <p className="mb-4">
            7.2 Trotz größter Sorgfalt kann eine Kreuzkontamination nicht
            vollständig ausgeschlossen werden. Gäste mit starken Allergien
            werden gebeten, sich vor der Bestellung mit dem Personal
            abzusprechen.
          </p>
          <p className="mb-4">
            7.3 Das Service Personal ist nicht verpflichtet jegliche
            Inhaltsstoffe ohne Nachfrage des Gastes aufzulisten dafür dient die
            Allergenkarte & Speisekarte.
          </p>

          <h2 className="text-2xl font-bold mb-4">8. Haftung und Schäden</h2>
          <p className="mb-4">
            8.1 Das Restaurant haftet nur für Schäden, die durch grobe
            Fahrlässigkeit oder Vorsatz verursacht wurden.
          </p>
          <p className="mb-4">
            8.2 Eltern haften für ihre Kinder. Schäden, die durch Gäste
            verursacht werden, müssen vom Verursacher oder dessen
            Aufsichtsperson ersetzt werden.
          </p>
          <p className="mb-4">
            8.3 Gäste haften für ihre Tiere. Schäden, die durch Gäste verursacht
            werden, müssen vom Verursacher oder dessen Aufsichtsperson ersetzt
            werden.
          </p>

          <h2 className="text-2xl font-bold mb-4">9. Datenschutz</h2>
          <p className="mb-4">
            9.1 Personenbezogene Daten, die durch Reservierungen oder Zahlungen
            erhoben werden, werden vertraulich behandelt und nicht an Dritte
            weitergegeben, es sei denn, dies ist gesetzlich vorgeschrieben.
          </p>
          <p className="mb-4">
            9.2 Die ausführliche Datenschutzerklärung kann unter
            www.zumgoldenenkalb.de eingesehen werden.
          </p>

          <h2 className="text-2xl font-bold mb-4">10. Änderungen der AGB</h2>
          <p className="mb-4">
            10.1 Das Restaurant behält sich das Recht vor, diese AGB jederzeit
            zu ändern.
          </p>
          <p className="mb-4">
            10.2 Änderungen werden auf der Website veröffentlicht und gelten als
            akzeptiert, wenn Gäste die Dienstleistungen nach der
            Veröffentlichung weiterhin nutzen.
          </p>

          <h2 className="text-2xl font-bold mb-4">11. Schlussbestimmungen</h2>
          <p className="mb-4">
            11.1 Es gilt das Recht der Bundesrepublik Deutschland.
          </p>
          <p className="mb-4">
            11.2 Gerichtsstand für Streitigkeiten ist München, sofern gesetzlich
            zulässig.
          </p>
          <p className="mb-4">
            11.3 Sollte eine Bestimmung dieser AGB unwirksam sein oder werden,
            bleibt die Gültigkeit der übrigen Bestimmungen unberührt.
          </p>
          <Spacer size="xl" />
        </div>
      </div>
    </>
  );
};
