import {
  BlockHeader,
  DividerWithLogo,
  DividerWithText,
} from "../components/BlockHeader";
import { CrossLikeShape, CrossLikeShape2 } from "../components/shapes/Shapes";
import Spacer from "../components/ui/Spacer";
import { useTranslation } from "react-i18next";
import { ParallaxBanner } from "react-scroll-parallax";
import {
  CLASSICS,
  DESSERTS,
  SAUCES,
  SIDES,
  STARTERS_LEFT,
  STARTERS_RIGHT,
  STEAK_DONENESS_LEFT,
  STEAK_DONENESS_RIGHT,
} from "../constants/menu";

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
    </>
  );
}
