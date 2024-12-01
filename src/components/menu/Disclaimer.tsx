import Spacer from "../ui/Spacer";
import { useTranslation } from "react-i18next";
import { DISCLAIMER_TEXT } from "@/constants/menu";

export const Disclaimer = () => {
  const { i18n } = useTranslation();
  const text = DISCLAIMER_TEXT[i18n.language as keyof typeof DISCLAIMER_TEXT];

  return (
    <div className="relative overflow-hidden px-[3%] md:px-[15%] lg:px-[25%] flex justify-center">
      <div className="border-2 border-gold-500 p-4 transform text-center relative rounded-xl w-full">
        <div
          className="absolute inset-0 z-0 rounded-xl"
          style={{
            backgroundImage: "radial-gradient(#030303, #000000)",
          }}
        />
        <div className="transform relative z-10">
          <Spacer size="sm" />
          {text}
          <Spacer size="sm" />
        </div>
      </div>
    </div>
  );
};
