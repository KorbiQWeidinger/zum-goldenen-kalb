import { CrossLikeShape, CrossLikeShape2 } from "../components/shapes/Shapes";
import { t } from "i18next";
import { DividerWithLogo } from "./BlockHeader";

export const DryAgedSteaksDisclaimer = () => {
  return (
    <div className="relative overflow-hidden px-[3%] md:px-[15%] lg:px-[25%] w-full">
      <div className="border-4 border-gold-500 p-8 transform text-center relative">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "radial-gradient(#030303, #000000)",
          }}
        ></div>
        <div className="transform relative z-10">
          <p className="text-gold-500 text-3xl tracking-widest uppercase mb-2 font-serif flex justify-center items-center">
            <CrossLikeShape className="w-6 h-6 bg-gold-500 mr-3" />
            {t("menu.steaks")}
            <CrossLikeShape className="w-6 h-6 bg-gold-500 ml-3" />
          </p>
          <p className="text-2xl font-bold text-white tracking-wider uppercase mb-4">
            {t("menu.service_1")}
          </p>
          <p className="text-gold-500 text-2xl md:text-3xl uppercase mb-2 font-serif flex justify-center items-center">
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
  );
};
