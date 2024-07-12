import {
  BlockHeader,
  DividerWithLogo,
  DividerWithText,
} from "../components/BlockHeader";
import { Footer } from "../components/Footer";
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

const FoodItem = ({
  title,
  description,
  price,
}: {
  title: string;
  description: string;
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
  items: { title: string; description: string; price: string }[];
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

export function Menu() {
  return (
    <>
      <Header />
      <div
        style={{
          backgroundImage: "url('/zum-goldenen-kalb/meats_2.jpg')",
        }}
        className="relative bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center w-screen min-w-screen pt-56 pb-28 px-4 md:px-16 text-center"
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
          <div
            className="border-4 border-gold-500 p-8 transform"
            style={{
              clipPath:
                "polygon(5% 0%, 95% 0%, 100% 5%, 100% 95%, 95% 100%, 5% 100%, 0% 95%, 0% 5%)",
            }}
          >
            <div className="transform">
              <p className="text-gold-500 text-3xl tracking-widest uppercase mb-2 font-serif">
                Dry Aged Steaks
              </p>
              <p className="text-2xl font-bold text-white tracking-wider uppercase mb-2">
                Unser Service Begleitet Sie zum
              </p>
              <p className="text-gold-500 text-2xl uppercase mb-2 font-serif">
                Reifeschrank
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
      </div>
      <Footer />
    </>
  );
}
