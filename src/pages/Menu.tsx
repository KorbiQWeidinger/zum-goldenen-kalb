import {
  BlockHeader,
  DividerWithLogo,
  DividerWithText,
} from "../components/BlockHeader";
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
import { DryAgedSteaksDisclaimer } from "../components/DryAgedSteaksDisclaimer";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

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
        <Spacer size="lg" />
        <DryAgedSteaksDisclaimer />
        <Spacer size="lg" />
        <button
          onClick={() => navigate("/dry-aging-cabinet")}
          className="bg-gold-500 text-white text-xl uppercase font-serif rounded-sm my-6 py-3 px-6 transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
        >
          <div className="flex justify-center items-center">
            {t("menu.dry_aging_cabinet")}
          </div>
        </button>
        <Spacer size="lg" />
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
