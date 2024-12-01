import { BlockHeader, DividerWithText } from "../components/BlockHeader";
import Spacer from "../components/ui/Spacer";
import { useTranslation } from "react-i18next";
import { ParallaxBanner } from "react-scroll-parallax";
import { DryAgedSteaksDisclaimer } from "../components/menu/DryAgedSteaksDisclaimer";
import { MenuSection, TwoColumns } from "@/components/menu/MenuSection";
import {
  STARTERS_LEFT,
  STARTERS_RIGHT,
  CLASSICS_LEFT,
  CLASSICS_RIGHT,
  PREPARATIONS_LEFT,
  PREPARATIONS_RIGHT,
  SIDES_LEFT,
  SIDES_RIGHT,
  SAUCES_LEFT,
  SAUCES_RIGHT,
  DESSERTS_LEFT,
  DESSERTS_RIGHT,
  DESSERTS_IN_A_GLASS_LEFT,
  DESSERTS_IN_A_GLASS_RIGHT,
  COFFEE_AND_TEA_LEFT,
  COFFEE_AND_TEA_RIGHT,
  SPIRITS_LEFT,
  SPIRITS_RIGHT,
} from "@/constants/menu";
import { OysterSpecial } from "@/components/menu/OysterSpecial";
import { Disclaimer } from "@/components/menu/Disclaimer";

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
  items: ReadonlyArray<{
    readonly title: string;
    readonly description?: string | JSX.Element;
    readonly price: number | string;
  }>;
}) => {
  return (
    <div>
      {items.map((item, index) => (
        <FoodItem
          key={index}
          title={item.title}
          description={item.description}
          price={`${item.price}`}
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
  items: ReadonlyArray<{
    readonly title: string;
    readonly description: string | JSX.Element;
  }>;
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
      <div className="bg-black text-white pt-14 pb-28 px-4 md:px-16 text-center ">
        <MenuSection
          label={t("menu.starters")}
          left={
            <FoodColumn items={STARTERS_LEFT[i18n.language as "en" | "de"]} />
          }
          right={
            <FoodColumn items={STARTERS_RIGHT[i18n.language as "en" | "de"]} />
          }
        />
        <Spacer size="lg" />
        <OysterSpecial />
        <Spacer size="xl" />
        <MenuSection
          label={t("menu.classics")}
          left={
            <FoodColumn items={CLASSICS_LEFT[i18n.language as "en" | "de"]} />
          }
          right={
            <FoodColumn items={CLASSICS_RIGHT[i18n.language as "en" | "de"]} />
          }
        />
        <Spacer size="xl" />
        <DryAgedSteaksDisclaimer />
        <Spacer size="xl" />
        <Spacer size="lg" />
        <DividerWithText label={t("menu.grill")} />
        <Spacer size="lg" />
        <TwoColumns
          left={
            <SteakTypeColumn
              items={PREPARATIONS_LEFT[i18n.language as "en" | "de"]}
            />
          }
          right={
            <SteakTypeColumn
              items={PREPARATIONS_RIGHT[i18n.language as "en" | "de"]}
            />
          }
        />
        <Spacer size="xl" />
        <MenuSection
          label={t("menu.sides")}
          left={<FoodColumn items={SIDES_LEFT[i18n.language as "en" | "de"]} />}
          right={
            <FoodColumn items={SIDES_RIGHT[i18n.language as "en" | "de"]} />
          }
        />
        <Spacer size="xl" />
        <Disclaimer />
        <Spacer size="xl" />
        <MenuSection
          label={t("menu.sauces")}
          left={
            <FoodColumn items={SAUCES_LEFT[i18n.language as "en" | "de"]} />
          }
          right={
            <FoodColumn items={SAUCES_RIGHT[i18n.language as "en" | "de"]} />
          }
        />
        <Spacer size="xl" />
        <MenuSection
          label={t("menu.desserts")}
          left={
            <FoodColumn items={DESSERTS_LEFT[i18n.language as "en" | "de"]} />
          }
          right={
            <FoodColumn items={DESSERTS_RIGHT[i18n.language as "en" | "de"]} />
          }
        />
        <Spacer size="xl" />
        <MenuSection
          label={t("menu.dessertsInAGlass")}
          left={
            <FoodColumn
              items={DESSERTS_IN_A_GLASS_LEFT[i18n.language as "en" | "de"]}
            />
          }
          right={
            <FoodColumn
              items={DESSERTS_IN_A_GLASS_RIGHT[i18n.language as "en" | "de"]}
            />
          }
        />
        <Spacer size="xl" />
        <MenuSection
          label={t("menu.spirits")}
          left={
            <FoodColumn items={SPIRITS_LEFT[i18n.language as "en" | "de"]} />
          }
          right={
            <FoodColumn items={SPIRITS_RIGHT[i18n.language as "en" | "de"]} />
          }
        />
        <Spacer size="xl" />
        <MenuSection
          label={t("menu.coffeeAndTea")}
          left={
            <FoodColumn
              items={COFFEE_AND_TEA_LEFT[i18n.language as "en" | "de"]}
            />
          }
          right={
            <FoodColumn
              items={COFFEE_AND_TEA_RIGHT[i18n.language as "en" | "de"]}
            />
          }
        />
        <Spacer size="xl" />
        <div className="text-sm text-gold-500 text-md md:text-lg font-times uppercase tracking-wides flex lg:flex-row flex-col items-center justify-center px-[5%] md:px-[15%] lg:px-[25%]">
          <div className="flex-1">{t("menu.warmCitchen")}</div>
          <div className="flex-1">{t("menu.dessertUntil")}</div>
        </div>
      </div>
    </>
  );
}
