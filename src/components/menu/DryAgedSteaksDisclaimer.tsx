import { CrossLikeShape2 } from "../shapes/Shapes";
import { t } from "i18next";
import Spacer from "../ui/Spacer";
import { VisitCabinetButton } from "./VisitCabinetButton";

export const DryAgedSteaksDisclaimer = () => {
  return (
    <div className="relative overflow-hidden px-[3%] md:px-[15%] lg:px-[25%] w-full">
      <div className="border-2 border-gold-500 p-4 transform text-center relative rounded-xl">
        <div
          className="absolute inset-0 z-0 rounded-xl"
          style={{
            backgroundImage: "radial-gradient(#030303, #000000)",
          }}
        ></div>
        <div className="transform relative z-10">
          <Spacer size="md" />
          <p className="text-gold-500 text-3xl tracking-widest uppercase mb-2 font-serif flex justify-center items-center">
            <img
              src={"/kalb-head-gold.svg"}
              className="h-12 w-12 pr-2"
              alt=""
            />
            {t("menu.steaks")}
            <img
              src={"/kalb-head-gold.svg"}
              className="h-12 w-12 pl-2"
              alt=""
            />
          </p>
          <Spacer size="md" />
          <p className="text-2xl font-bold text-white tracking-wider uppercase mb-4">
            {t("menu.service_1")}
          </p>
          <p className="text-gold-500 text-2xl md:text-3xl uppercase mb-2 font-serif flex justify-center items-center">
            <CrossLikeShape2 className="w-10 h-10 bg-gold-500 mr-3" />
            {t("menu.cabinet")}
            <CrossLikeShape2 className="w-10 h-10 bg-gold-500 ml-3" />
          </p>
          <Spacer size="md" />
          <p className="text-white text-lg uppercase mb-2">
            {t("menu.special")}
          </p>
          <Spacer size="sm" />
          <p className="text-white text-sm uppercase mt-1 mb-2">
            {t("menu.all")}
          </p>
          <Spacer size="sm" />
          <VisitCabinetButton />
        </div>
      </div>
    </div>
  );
};
