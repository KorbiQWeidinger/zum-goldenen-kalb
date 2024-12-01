import Spacer from "../ui/Spacer";
import { useTranslation } from "react-i18next";
import { OYSTER_SPECIAL_ITEMS } from "@/constants/menu";

export const OysterSpecial = () => {
  const { i18n, t } = useTranslation();
  const items =
    OYSTER_SPECIAL_ITEMS[i18n.language as keyof typeof OYSTER_SPECIAL_ITEMS];

  return (
    <div className="relative overflow-hidden px-[3%] md:px-[15%] lg:px-[25%] flex justify-center">
      <div className="border-2 border-gold-500 p-4 transform text-center relative rounded-xl w-full xl:w-2/3">
        <div
          className="absolute inset-0 z-0 rounded-xl"
          style={{
            backgroundImage: "radial-gradient(#030303, #000000)",
          }}
        />
        <div className="transform relative z-10">
          <Spacer size="sm" />
          <div
            className={`mx-2 text-md md:text-lg font-times uppercase tracking-widest text-gold-500 border-gold-500`}
          >
            {t("menu.oyster_special")}
          </div>
          <Spacer size="lg" />
          {items.map((item) => (
            <>
              <div key={item.title} className="flex justify-between text-left">
                <div>
                  <div>{item.title}</div>
                  {"addition" in item && (
                    <div className="text-sm text-gray-400">{item.addition}</div>
                  )}
                </div>
                <div className="flex">
                  {"volume" in item && (
                    <div className="mr-4">{item.volume}</div>
                  )}
                  <div>{item.price}</div>
                </div>
              </div>
              <Spacer size="sm" />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};
