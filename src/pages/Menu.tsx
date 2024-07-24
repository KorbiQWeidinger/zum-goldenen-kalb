import {
  BlockHeader,
  DividerWithLogo,
  DividerWithText,
} from "../components/BlockHeader";
import { Footer } from "../components/Footer";
import { CrossLikeShape, CrossLikeShape2 } from "../components/shapes/Shapes";
import Header from "../components/header/Header";
import Spacer from "../components/ui/Spacer";
import { useTranslation } from "react-i18next";
import { ParallaxBanner } from "react-scroll-parallax";

const STARTERS_LEFT = {
  de: [
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
    {
      title: "BEEF TEA",
      description: "mit Vodka-Shot (nennen wir Bull Shot) + 4,50",
      price: "9,50",
    },
    {
      title: "FRANZÖSISCHE ZWIEBELSUPPE",
      description: "mit Croûtons, gratiniert mit Gruyère-Käse",
      price: "14,50",
    },
  ],
  en: [
    {
      title: "PIMIENTOS DE PADRÓN (LARGE)",
      description: "green peppers with sour cream dip",
      price: "14,00",
    },
    {
      title: "CAESAR SALAD",
      description: "Parmesan cheese, croutons",
      price: "s. 7,50 / l. 10,50",
    },
    {
      title: "BEEF TEA",
      description: "with vodka shot (called Bull Shot) + 4,50",
      price: "9,50",
    },
    {
      title: "FRENCH ONION SOUP",
      description: "with croutons, gratinated with Gruyère cheese",
      price: "14,50",
    },
  ],
};

const STARTERS_RIGHT = {
  de: [
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
    {
      title: "CARNAD AU VIN",
      description: "Ente, grüner Apfel, Radieschen, Spinat",
      price: "20,50",
    },
  ],
  en: [
    {
      title: "RAW MARINATED SALMON",
      description: "lemon butter, herb salad, potato rösti",
      price: "19,50",
    },
    {
      title: "TUNA TARTARE",
      description: "avocado cream, wan tan chips",
      price: "s. 26,50 / l. 33,50",
    },
    {
      title: "BEEF TARTARE",
      description: "potato chips, crème fraîche",
      price: "s. 21,50 / l. 28,50",
    },
    {
      title: "CARNAD AU VIN",
      description: "duck, green apple, radish, spinach",
      price: "20,50",
    },
  ],
};

const STEAK_DONENESS_LEFT = {
  de: [
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
  ],
  en: [
    {
      title: "BLACK & BLUE",
      description: "Charred on the outside, rare in the middle.",
    },
    {
      title: "RARE",
      description:
        "This refers to a steak that has been cooked for a very short period of time - leaving the centre cool and red in color. It's just a stage up from the raw meat - but cooked on the outside.",
    },
    {
      title: "MEDIUM RARE",
      description:
        "Medium rare steaks are warm with a pink to red centre - soft and juicy on the inside and firm on the outside. Mostly our reccomendation.",
    },
  ],
};

const STEAK_DONENESS_RIGHT = {
  de: [
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
      title: "WELL DONE",
      description: (
        <>
          FILET: NUR BUTTERFLYCUT <br />
          Durchgebraten / grau 60°C+ (bei dieser Garstufe übernehmen wir keine
          Verantwortung).
        </>
      ),
    },
  ],
  en: [
    {
      title: "MEDIUM",
      description:
        "More grey-brown than pink in the centre. More pronounced band of pink in the middle.",
    },
    {
      title: "MEDIUM WELL",
      description:
        "Just a hint of pale pink inside this steak will be mostly grey-brown throughout. This level of doneness is for those who don't want a lot of pink in their meat.",
    },
    {
      title: "WELL DONE",
      description:
        "Well-done steaks are normally charred on the outside and are greyish-brown all through with no sign of pink. At your own risk!",
    },
  ],
};

const SIDES = {
  de: [
    { title: "KARTOFFELGRATIN", price: "6,50" },
    { title: "TRÜFFELPOMMES (GROSS)", price: "22,00" },
    { title: "POMMES", price: "6,50" },
    { title: "SÜSSKARTOFFELPÜREE", price: "6,50" },
    { title: "BAKED POTATO & SOUR CREAM", price: "6,50" },
    { title: "CREAM CORN", price: "7,50" },
    { title: "BLATTSPINAT", price: "7,50" },
    { title: "SPECKBOHNEN", price: "7,50" },
    { title: "PAPRIKA & TOMATE GESCHMORT", price: "7,50" },
    { title: "BEILAGENSALAT", price: "7,50" },
    { title: "MAC & CHEESE (SIGNATURE SIDE DISH)", price: "9,50" },
  ],
  en: [
    { title: "POTATO GRATIN", price: "6,50" },
    { title: "TRUFFLE FRIES (LARGE)", price: "22,00" },
    { title: "FRIES", price: "6,50" },
    { title: "MASHED SWEET POTATOES", price: "6,50" },
    { title: "BAKED POTATO & SOUR CREAM", price: "6,50" },
    { title: "CREAMED CORN", price: "7,50" },
    { title: "LEAF SPINACH", price: "7,50" },
    { title: "GREEN BEANS WITH BACON", price: "7,50" },
    { title: "STEAMED PAPRIKA & TOMATO", price: "7,50" },
    { title: "MIXED SALAD", price: "7,50" },
    { title: "MAC & CHEESE (SIGNATURE SIDE DISH)", price: "9,50" },
  ],
};

const CLASSICS = {
  de: [
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
  ],
  en: [
    {
      title: "PRIME RIBEYE STEAK (US ANGUS)",
      description: "approx. 330g",
      price: "65,50",
    },
    {
      title: "PRIME FILET STEAK (AUSTRALIAN ANGUS)",
      description: "approx. 220g",
      price: "59,50",
    },
    {
      title: "CHEESEBURGER FROM FILET (AUSTRALIAN ANGUS)",
      description: "fries",
      price: "29,50",
    },
    {
      title: "SPARERIBS (IBERICO PIG)",
      description: "fries, slaw",
      price: "36,50",
    },
    {
      title: "BEYOND BURGER (VEGAN)",
      description: "fries, optionally with cheese",
      price: "21,00 / 22,00",
    },
    {
      title: "VEGETARIAN TRIO",
      description:
        "steamed paprika & tomato, leaf spinach, mashed sweet potatoes",
      price: "18,50",
    },
  ],
};

const SAUCES = {
  de: [
    { title: "SAUCE BÉARNAISE", price: "4,00" },
    { title: "MEERESALZBUTTER", price: "3,50" },
    { title: "CHIMICHURRI", price: "5,00" },
    { title: "CHILI-CHUTNEY", price: "4,00" },
    { title: "PFEFFERRAHM", price: "4,50" },
    { title: "KALBJUS", price: "4,00" },
    { title: "BBQ", price: "4,00" },
  ],
  en: [
    { title: "SAUCE BÉARNAISE", price: "4,00" },
    { title: "SEA SALT BUTTER", price: "3,50" },
    { title: "CHIMICHURRI", price: "5,00" },
    { title: "CHILI CHUTNEY", price: "4,00" },
    { title: "PEPPER CREAM", price: "4,50" },
    { title: "VEAL JUS", price: "4,00" },
    { title: "BBQ", price: "4,00" },
  ],
};

const DESSERTS = {
  de: [
    { title: "CRÈME BRÛLÉE", price: "7,50" },
    {
      title: "SORBET",
      description: (
        <>
          Zitrone, Basilikum oder Tagespsecial <br />
          mit Vodka- oder Gin-Shot +4,50
        </>
      ),
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
  ],
  en: [
    { title: "CRÈME BRÛLÉE", price: "7,50" },
    {
      title: "SORBET",
      description: "lemon, basil, daily special; with Vodka or Gin shot + 4,50",
      price: "4,00",
    },
    {
      title: "WARM CHOCOLATE CAKE",
      description:
        "With liquid chocolate core and sour cream ice cream (15 min)",
      price: "14,00",
    },
    {
      title: "PAVLOVA",
      description: "meringue, vanilla ice cream, red berries",
      price: "16,00",
    },
  ],
};

const FoodItem = ({
  title,
  description,
  price,
}: {
  title: string;
  description?: string | JSX.Element;
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
  items: { title: string; description?: string | JSX.Element; price: string }[];
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
  description: string | JSX.Element;
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
  items: { title: string; description: string | JSX.Element }[];
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
  const { t, i18n } = useTranslation();

  return (
    <>
      <Header />
      <ParallaxBanner
        layers={[{ image: "/meats_2.jpg", speed: -25 }]}
        className="relative flex flex-col items-center justify-center w-screen min-w-screen pt-72 pb-44 px-4 md:px-16 text-center"
      >
        <div className="absolute inset-0 bg-black opacity-50 z-10" />
        <BlockHeader label={"Steak & Entourage"} header={t("home.title_1")} />
      </ParallaxBanner>
      <div className="bg-black text-white pt-14 pb-28 px-4 md:px-16 text-center">
        <DividerWithText label={t("menu.starters")} />
        <Spacer size="lg" />
        <div className="flex flex-col xl:flex-row xl:space-x-16 justify-center items-start md:items-start space-y-0 px-[5%] md:px-[15%] lg:px-[25%] w-full">
          <div className="w-full md:flex-1">
            <FoodColumn items={STARTERS_LEFT[i18n.language as "en" | "de"]} />
          </div>
          <div className="w-full md:flex-1">
            <FoodColumn items={STARTERS_RIGHT[i18n.language as "en" | "de"]} />
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
                {t("menu.steaks")}
                <CrossLikeShape className="w-6 h-6 bg-gold-500 ml-3" />
              </p>
              <p className="text-2xl font-bold text-white tracking-wider uppercase mb-4">
                {t("menu.service_1")}
              </p>
              <p className="text-gold-500 text-3xl uppercase mb-2 font-serif flex justify-center items-center">
                <CrossLikeShape2 className="w-10 h-10 bg-gold-500 mr-3" />
                {t("menu.cabinet")}
                <CrossLikeShape2 className="w-10 h-10 bg-gold-500 ml-3" />
              </p>
              <p className="text-white text-lg uppercase mb-2">
                {t("menu.special")}
              </p>
              <DividerWithLogo />
              <p className="text-white text-sm uppercase mt-1 mb-2">
                {t("menu.all")}
              </p>
            </div>
          </div>
        </div>
        <DividerWithText label={t("menu.grill")} />
        <Spacer size="lg" />
        <div className="flex flex-col xl:flex-row xl:space-x-16 justify-center items-start md:items-start space-y-0 px-[5%] md:px-[15%] lg:px-[25%] w-full">
          <div className="w-full md:flex-1">
            <SteakTypeColumn
              items={STEAK_DONENESS_LEFT[i18n.language as "en" | "de"]}
            />
          </div>
          <div className="w-full md:flex-1">
            <SteakTypeColumn
              items={STEAK_DONENESS_RIGHT[i18n.language as "en" | "de"]}
            />
          </div>
        </div>
        <div className="flex flex-col xl:flex-row xl:space-x-16 justify-center items-start md:items-start space-y-0 px-[5%] md:px-[15%] lg:px-[25%] w-full">
          <div className="w-full md:flex-1">
            <DividerWithLogo />
            <div className="font-serif text-gold-500 uppercase">
              {t("menu.sides")}
            </div>
            <Spacer />
            <FoodColumn items={SIDES[i18n.language as "en" | "de"]} />
          </div>
          <div className="w-full md:flex-1">
            <DividerWithLogo />
            <div className="font-serif text-gold-500 uppercase">
              {t("menu.classics")}
            </div>
            <Spacer />
            <FoodColumn items={CLASSICS[i18n.language as "en" | "de"]} />
          </div>
        </div>
        <div className="flex flex-col xl:flex-row xl:space-x-16 justify-center items-start md:items-start space-y-0 px-[5%] md:px-[15%] lg:px-[25%] w-full">
          <div className="w-full md:flex-1">
            <DividerWithLogo />
            <div className="font-serif text-gold-500 uppercase">
              {t("menu.sauces")}
            </div>
            <Spacer />
            <FoodColumn items={SAUCES[i18n.language as "en" | "de"]} />
          </div>
          <div className="w-full md:flex-1">
            <DividerWithLogo />
            <div className="font-serif text-gold-500 uppercase">
              {t("menu.desserts")}
            </div>
            <Spacer />
            <FoodColumn items={DESSERTS[i18n.language as "en" | "de"]} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
