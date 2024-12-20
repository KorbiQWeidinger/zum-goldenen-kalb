import { BlockHeader } from "../components/BlockHeader";
import Spacer from "../components/ui/Spacer";

export function PrivacyPolicy() {
  return (
    <>
      <div className="bg-black text-white py-32 md:py-24 px-4 md:px-16 text-center">
        <BlockHeader
          label="Datenschutzerklärung"
          header="DATENSCHUTZERKLÄRUNG"
        />
        <Spacer size="lg" />
        <div className="text-left max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">1. Verantwortlicher</h2>
          <p>
            Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO)
            ist:
            <br />
            <br />
            FM Gastronomie GmbH
            <br />
            Ferenc Barbay
            <br />
            Utzschneiderstraße 1
            <br />
            80469 München
            <br />
            Telefon: 08923542290
            <br />
            E-Mail: info@zumgoldenenkalb.de
          </p>
          <Spacer size="lg" />
          <h2 className="text-2xl font-bold mb-4">
            2. Erhobene Daten und Verarbeitungszwecke
          </h2>
          <p>
            Wir verarbeiten Ihre personenbezogenen Daten ausschließlich gemäß
            den gesetzlichen Bestimmungen. Nachfolgend informieren wir Sie über
            die wichtigsten Verarbeitungszwecke:
          </p>
          <Spacer size="lg" />
          <h3 className="text-xl font-semibold mb-2">a) Reservierungen</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>Erhobene Daten: Name, Telefonnummer, E-Mail-Adresse.</li>
            <li>Zweck: Bearbeitung Ihrer Reservierung und Rückfragen.</li>
            <li>
              Rechtsgrundlage: Art. 6 Abs. 1 lit. b) DSGVO (Vertragserfüllung).
            </li>
          </ul>
          <Spacer size="lg" />
          <h3 className="text-xl font-semibold mb-2">b) Kontaktaufnahme</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>
              Erhobene Daten: Name, E-Mail-Adresse, Telefonnummer und Nachricht.
            </li>
            <li>Zweck: Bearbeitung Ihrer Anfragen.</li>
            <li>Rechtsgrundlage: Art. 6 Abs. 1 lit. b) DSGVO.</li>
          </ul>
          <Spacer size="lg" />
          <h3 className="text-xl font-semibold mb-2">
            c) Cookies und Website-Analyse
          </h3>
          <ul className="list-disc pl-5 mb-4">
            <li>
              Erhobene Daten: IP-Adresse, Browsertyp, Zugriffszeit, besuchte
              Seiten.
            </li>
            <li>
              Zweck: Optimierung unserer Website und Analyse des
              Nutzerverhaltens.
            </li>
            <li>
              Rechtsgrundlage: Art. 6 Abs. 1 lit. f) DSGVO (berechtigtes
              Interesse).
            </li>
          </ul>
          <Spacer size="lg" />
          <h2 className="text-2xl font-bold mb-4">3. Weitergabe von Daten</h2>
          <p>
            Ihre Daten werden nur weitergegeben, wenn dies zur Vertragserfüllung
            erforderlich ist (z. B. Reservierungen oder Zahlungsabwicklungen),
            wir rechtlich dazu verpflichtet sind oder Sie ausdrücklich
            zugestimmt haben.
          </p>
          <Spacer size="lg" />
          <h2 className="text-2xl font-bold mb-4">
            4. Speicherung und Löschung
          </h2>
          <p>
            Ihre Daten werden gelöscht, sobald der Zweck der Verarbeitung
            erfüllt ist und keine gesetzlichen Aufbewahrungspflichten bestehen.
          </p>
          <Spacer size="lg" />
          <h2 className="text-2xl font-bold mb-4">5. Rechte der Betroffenen</h2>
          <p>
            Sie haben folgende Rechte gemäß der DSGVO:
            <ul>
              <li>
                Auskunft: Erhalten Sie Informationen über die Verarbeitung Ihrer
                Daten (Art. 15 DSGVO).
              </li>
              <li>
                Berichtigung: Korrigieren Sie unrichtige Daten (Art. 16 DSGVO).
              </li>
              <li>
                Löschung: Beantragen Sie die Löschung Ihrer Daten (Art. 17
                DSGVO).
              </li>
              <li>
                Einschränkung: Fordern Sie eine Einschränkung der Verarbeitung
                an (Art. 18 DSGVO).
              </li>
              <li>
                Datenübertragbarkeit: Erhalten Sie Ihre Daten in einem
                übertragbaren Format (Art. 20 DSGVO).
              </li>
              <li>
                Widerspruch: Legen Sie Widerspruch gegen die Verarbeitung ein
                (Art. 21 DSGVO).
              </li>
            </ul>
            Zur Ausübung dieser Rechte wenden Sie sich bitte an
            info@zumgoldenenkalb.de.
          </p>
          <Spacer size="lg" />
          <h2 className="text-2xl font-bold mb-4">6. Cookies</h2>
          <p>
            Unsere Website verwendet aktuell nur ein einziges Cookie, zum
            tracking der Conversion Rate welches nach DSGVO keine Einwilligung
            erfordert.
          </p>

          {/* <p>
            Unsere Website verwendet Cookies, um die Nutzererfahrung zu
            verbessern.
            <ul>
              <li>
                Technisch notwendige Cookies: Für den Betrieb der Website
                unerlässlich.
              </li>
              <li>
                Optionale Cookies: Für Analysezwecke. Sie können diese über
                unseren Cookie-Manager steuern.
              </li>
            </ul>
          </p> */}
          <Spacer size="lg" />
          <h2 className="text-2xl font-bold mb-4">7. Social Media</h2>
          <p>
            Wir unterhalten Profile auf Facebook, Instagram und YouTube, um mit
            Kunden zu interagieren. Bei der Nutzung dieser Plattformen gelten
            die Datenschutzrichtlinien der jeweiligen Anbieter.
            <ul className="list-disc pl-5 mb-4">
              <li>
                <a
                  href="https://www.facebook.com/policy.php"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Datenschutzerklärung Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://help.instagram.com/519522125107875"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Datenschutzerklärung Instagram
                </a>
              </li>
            </ul>
          </p>
          <Spacer size="lg" />
          <h2 className="text-2xl font-bold mb-4">8. Kontaktformular</h2>
          <p>
            Wenn Sie uns über das Kontaktformular kontaktieren, verwenden wir
            Ihre Daten ausschließlich zur Bearbeitung Ihrer Anfrage.
          </p>
          <Spacer size="lg" />
          <h2 className="text-2xl font-bold mb-4">
            9. Änderungen der Datenschutzerklärung
          </h2>
          <p>
            Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf
            anzupassen. Die aktuelle Version finden Sie jederzeit auf unserer
            Website.
          </p>
          <Spacer size="lg" />
          <h2 className="text-2xl font-bold mb-4">10. Beschwerden</h2>
          <p>
            Wenn Sie der Meinung sind, dass wir gegen die DSGVO verstoßen,
            können Sie sich an die zuständige Aufsichtsbehörde wenden:
            <br />
            Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)
            <br />
            Promenade 27, 91522 Ansbach
            <br />
            E-Mail: poststelle@lda.bayern.de
          </p>
        </div>
      </div>
    </>
  );
}
