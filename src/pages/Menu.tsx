import {
  BlockHeader,
  DividerWithLogo,
  DividerWithText,
} from "../components/BlockHeader";
import { Footer } from "../components/Footer";
import { CrossLikeShape, CrossLikeShape2 } from "../components/shapes/Shapes";
import Header from "../components/header/Header";
import Spacer from "../components/ui/Spacer";

const STARTERS_LEFT = [
  {
    title: "BEEF TEA",
    description: "mit Vodka-Shot (nennen wir Bull Shot) + 4,50",
    price: "9,50",
  },
  {
    title: "PIMIENTOS DE PADRÓN (GROSS)",
    description: "grüne Paprikas mit Sauerrahm-Dip",
    price: "14,00",
  },
  {
    title: "CAESAR SALAD",
    description: "Parmesan, Croûtons",
    price: "kl. 7,50 / gr. 10,50",
  },
];

const STARTERS_RIGHT = [
  {
    title: "ROH MARINIERTER LACHS",
    description: "Zitronenbutter, Kräutersalat, Kartoffelrösti",
    price: "19,50",
  },
  {
    title: "THUNFISCHTARTAR",
    description: "Avocadocreme, Wan Tan-Chips",
    price: "kl. 26,50 / gr. 33,50",
  },
  {
    title: "TATAR VOM RIND",
    description: "Kartoffelchips, Crème Fraîche",
    price: "kl. 21,50 / gr. 28,50",
  },
];

const STEAK_DONENESS = [
  {
    title: "BLACK & BLUE",
    description: "Außen geröstet, innen kalt und roh.",
  },
  {
    title: "RARE",
    description:
      "Das Fleisch wird kräftig angebraten. Es erreicht dabei innen eine Maximaltemperatur von 45°-50°C und ist damit noch roh.",
  },
  {
    title: "MEDIUM RARE",
    description:
      "Das Fleisch wird bei mittlerer Hitze gebraten, so dass es im Kern bis auf etwa 50°-54°C erhitzt wird. Es erscheint dadurch immer noch blutig.",
  },
  {
    title: "MEDIUM",
    description:
      "Das Fleisch wird bei mittlerer Hitze auf den Punkt gegart. Es weist im Inneren eine Temperatur von maximal 54°-56°C auf und ist von außen nach innnen gleichmäßig rosa gefärbt.",
  },
  {
    title: "MEDIUM WELL",
    description:
      "Das Fleisch wird auf kleinem Feuer langsam gebraten, so dass es im Kern nur noch ganz leicht rosa ist. Es hat im Kern eine Temperatur von etwa 56°-60°C.",
  },
  {
    title: "WELL DONE | FILET: NUR BUTTERFLYCUT",
    description:
      "Durchgebraten / grau 60°C+ (bei dieser Garstufe übernehmen wir keine Verantwortung).",
  },
];

const SIDES = [
  { title: "KARTOFFELGRATIN", price: "6,50" },
  { title: "TRÜFFELPOMMES (GROSS)", price: "22,00" },
  { title: "POMMES", price: "6,50" },
  { title: "SÜSSKARTOFFELPÜREE", price: "6,50" },
  { title: "BAKED POTATO & SOUR CREAM", price: "7,50" },
  { title: "CREAM CORN", price: "6,50" },
  { title: "BLATTSPINAT", price: "7,50" },
  { title: "SPECKBOHNEN", price: "7,50" },
  { title: "PAPRIKA & TOMATE GESCHMORT", price: "7,50" },
  { title: "BEILAGENSALAT", price: "7,50" },
  { title: "MAC & CHEESE (SIGNATURE SIDE DISH)", price: "9,50" },
];

const CLASSICS = [
  {
    title: "PRIME RIBEYE STEAK (US ANGUS)",
    description: "ca. 330g",
    price: "65,50",
  },
  {
    title: "PRIME FILET STEAK (AUSTRALIAN ANGUS)",
    description: "ca. 220g",
    price: "59,50",
  },
  {
    title: "CHEESEBURGER AUS FILET (AUSTRALIAN ANGUS)",
    description: "Pommes",
    price: "29,50",
  },
  {
    title: "SPARERIBS (IBERICO SCHWEIN)",
    description: "Krautsalat, Pommes",
    price: "36,50",
  },
  {
    title: "BEYOND BURGER (VEGAN)",
    description: "Pommes, wahlweise mit Käse",
    price: "21,00 / 22,00",
  },
  {
    title: "VEGETARISCHES DREIERLEI",
    description: "Paprika & Tomate geschmort, Blattspinat, Süßkartoffelpüree",
    price: "18,50",
  },
];

const SAUCES = [
  { title: "SAUCE BÉARNAISE", price: "4,00" },
  { title: "MEERESALZBUTTER", price: "3,50" },
  { title: "CHIMICHURRI", price: "4,00" },
  { title: "CHILI-CHUTNEY", price: "4,00" },
  { title: "PFEFFERRAHM", price: "4,50" },
  { title: "KALB JUS", price: "4,00" },
  { title: "BBQ", price: "4,00" },
];

const DESSERTS = [
  { title: "CRÈME BRÛLÉE", price: "7,50" },
  {
    title: "SORBET",
    description:
      "Zur Auswahl: Zitrone, Basilikum oder Tagespsecial mit Vodka- oder Gin-Shot +4,50",
    price: "4,00",
  },
  {
    title: "WARMER SCHOKOLADENKUCHEN",
    description: "Mit flüssigem Schokoladenkern und Sauerrahmeis (15 Min)",
    price: "14,00",
  },
  {
    title: "PAVLOVA",
    description: "Baiser, Vanilleeis, rote Beeren",
    price: "16,00",
  },
];

const FoodItem = ({
  title,
  description,
  price,
}: {
  title: string;
  description?: string;
  price: string;
}) => {
  return (
    <div className="flex justify-between text-left mb-4">
      <div className="flex-1 mr-4">
        <span>{title}</span>
        <div className="text-sm text-gray-400">{description}</div>
      </div>
      <div className="whitespace-nowrap">{price}</div>
    </div>
  );
};

const FoodColumn = ({
  items,
}: {
  items: { title: string; description?: string; price: string }[];
}) => {
  return (
    <div>
      {items.map((item, index) => (
        <FoodItem
          key={index}
          title={item.title}
          description={item.description}
          price={item.price}
        />
      ))}
    </div>
  );
};

const SteakTypeItem = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex justify-between text-center mb-4">
      <div className="flex-1 mr-4">
        <span>{title}</span>
        <div className="text-sm text-gray-400">{description}</div>
      </div>
    </div>
  );
};

const SteakTypeColumn = ({
  items,
}: {
  items: { title: string; description: string }[];
}) => {
  return (
    <div>
      {items.map((item, index) => (
        <SteakTypeItem
          key={index}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export function Menu() {
  return (
    <>
      <Header />
      <div
        style={{
          backgroundImage: "url('/meats_2.jpg')",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
        className="relative bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center w-screen min-w-screen pt-72 pb-44 px-4 md:px-16 text-center"
      >
        <div className="absolute inset-0 bg-black opacity-50 z-10" />
        <BlockHeader
          label={"Steak & Entourage"}
          header={"UNSERE SPEISEKARTE"}
        />
      </div>
      <div className="bg-black text-white pt-14 pb-28 px-4 md:px-16 text-center">
        <DividerWithText label="Vorspeisen" size="text-lg md:text-xl" />
        <Spacer size="lg" />
        <div className="flex flex-col xl:flex-row xl:space-x-16 justify-center items-start md:items-start space-y-0 px-[5%] md:px-[15%] lg:px-[25%] w-full">
          <div className="w-full md:flex-1">
            <FoodColumn items={STARTERS_LEFT} />
          </div>
          <div className="w-full md:flex-1">
            <FoodColumn items={STARTERS_RIGHT} />
          </div>
        </div>
        <DividerWithLogo />
        <div
          className="bg-gradient-to-r from-black via-gray-900 to-black relative overflow-hidden py-10 px-[5%] md:px-[15%] lg:px-[25%] w-full"
          style={{
            backgroundImage: "radial-gradient(#272727, #000000 70%)",
          }}
        >
          <div className="border-4 border-gold-500 p-8 transform">
            <div className="transform">
              <p className="text-gold-500 text-3xl tracking-widest uppercase mb-2 font-serif flex justify-center items-center">
                <CrossLikeShape className="w-6 h-6 bg-gold-500 mr-3" />
                Dry Aged Steaks
                <CrossLikeShape className="w-6 h-6 bg-gold-500 ml-3" />
              </p>
              <p className="text-2xl font-bold text-white tracking-wider uppercase mb-4">
                Unser Service Begleitet Sie zum
              </p>
              <p className="text-gold-500 text-3xl uppercase mb-2 font-serif flex justify-center items-center">
                <CrossLikeShape2 className="w-10 h-10 bg-gold-500 mr-3" />
                Reifeschrank
                <CrossLikeShape2 className="w-10 h-10 bg-gold-500 ml-3" />
              </p>
              <p className="text-white text-lg uppercase mb-2">
                Mit täglich wechselnden special cuts
              </p>
              <DividerWithLogo />
              <p className="text-white text-sm uppercase mt-1 mb-2">
                Alle Steaks auch als Surf&Turf mit Wildfanggarnele 23,00 / Stück
              </p>
            </div>
          </div>
        </div>
        <DividerWithText
          label="Alle Steaks werden auf unserem Hajatec Holzkohlegrill zubereitet"
          size="text-base"
        />
        <Spacer size="lg" />
        <div className="px-[5%] md:px-[15%] lg:px-[25%] w-full">
          <SteakTypeColumn items={STEAK_DONENESS} />
          <Spacer />
        </div>
        <div className="flex flex-col xl:flex-row xl:space-x-16 justify-center items-start md:items-start space-y-0 px-[5%] md:px-[15%] lg:px-[25%] w-full">
          <div className="w-full md:flex-1">
            <DividerWithLogo />
            <div className="font-serif text-gold-500 uppercase">Beilagen</div>
            <Spacer />
            <FoodColumn items={SIDES} />
          </div>
          <div className="w-full md:flex-1">
            <DividerWithLogo />
            <div className="font-serif text-gold-500 uppercase">KLASSIKER</div>
            <Spacer />
            <FoodColumn items={CLASSICS} />
          </div>
        </div>
        <div className="flex flex-col xl:flex-row xl:space-x-16 justify-center items-start md:items-start space-y-0 px-[5%] md:px-[15%] lg:px-[25%] w-full">
          <div className="w-full md:flex-1">
            <DividerWithLogo />
            <div className="font-serif text-gold-500 uppercase">Saucen</div>
            <Spacer />
            <FoodColumn items={SAUCES} />
          </div>
          <div className="w-full md:flex-1">
            <DividerWithLogo />
            <div className="font-serif text-gold-500 uppercase">
              Nachspeisen
            </div>
            <Spacer />
            <FoodColumn items={DESSERTS} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
