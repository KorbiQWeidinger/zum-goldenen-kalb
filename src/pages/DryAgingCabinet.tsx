import { useState } from "react";
import { MeatInfo, meats } from "../constants/meats";
import { MdClose } from "react-icons/md";
import { BlockHeader, DividerWithLogo } from "../components/BlockHeader";
import { ParallaxBanner } from "react-scroll-parallax";
import { useMediaQuery } from "@react-hookz/web";
import Spacer from "@/components/ui/Spacer";
import { useTranslation } from "react-i18next";
// import FadingElements from "@/components/ui/fading-elements";
// import FadingImages from "@/components/ui/fading-images";

interface MeatInfoCircleProps {
  meat: MeatInfo;
  onClick: () => void;
  onMouseEnter: () => void;
}

const MeatInfoCircle = ({
  meat,
  onClick,
  onMouseEnter,
}: MeatInfoCircleProps) => {
  return (
    <button
      className="group absolute w-8 h-8 transition-all duration-300 ease-in-out focus:outline-none z-20"
      style={{ top: meat.position.top, left: meat.position.left }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
    >
      <span className="absolute inset-0 block w-full h-full bg-gold-500 bg-opacity-80 rounded-full transform scale-75 transition-all duration-300 group-hover:bg-opacity-95"></span>
      <span className="absolute inset-0 block w-full h-full border-2 border-gold-500 border-opacity-80 rounded-full transition-all duration-300 group-hover:border-opacity-95"></span>
    </button>
  );
};

function MeatInfoModal({
  meat,
  setSelectedMeat,
  isLargeScreen,
}: {
  meat?: MeatInfo;
  setSelectedMeat: (meat?: MeatInfo) => void;
  isLargeScreen: boolean;
}) {
  const { i18n } = useTranslation();
  if (!meat) {
    return <></>;
  }

  return (
    <div
      className={`${
        isLargeScreen
          ? "relative m-8"
          : "fixed inset-0 bg-gray-900 bg-opacity-40"
      } text-white flex items-center justify-center p-4 z-20`}
    >
      <div
        className={`bg-black shadow-xl relative rounded-md border border-gold-500 border-opacity-80 w-full ${
          isLargeScreen ? "h-full" : ""
        }`}
      >
        {!isLargeScreen && (
          <button
            className="absolute top-2 right-2 text-gold-500 hover:text-white"
            onClick={() => setSelectedMeat(undefined)}
          >
            <MdClose size={24} />
          </button>
        )}
        <div className="p-4">
          <Spacer size="md" />
          <DividerWithLogo />
          <h2 className="text-2xl text-white font-bold mb-4">{meat.name}</h2>
          <Spacer size="sm" />
          <img
            className={`h-full aspect-square mb-4 mx-auto relative rounded-md ${
              isLargeScreen ? "w-1/2" : "w-[70%]"
            }`}
            src={meat.image}
            alt={meat.name}
          />
          <Spacer size="md" />
          <p className="text-left text-sm text-slate-400 mx-4">
            {meat[i18n.language as "en" | "de"].description}
          </p>
          <Spacer size="md" />
        </div>
      </div>
    </div>
  );
}

export default function DryAgingCabinet() {
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");
  const [selectedMeat, setSelectedMeat] = useState<MeatInfo | undefined>(
    isLargeScreen ? meats[0] : undefined
  );

  return (
    <div>
      <ParallaxBanner
        layers={[{ image: "/meats_2.jpg", speed: -25 }]}
        className="relative flex flex-col items-center justify-center w-screen min-w-screen pt-72 pb-44 px-4 md:px-16 text-center"
      >
        <div className="absolute inset-0 bg-black opacity-50 z-10" />
        <BlockHeader label={"Our Meats"} header={"Dry Aging Cabinet"} />
      </ParallaxBanner>
      <div
        className={`my-32 w-full text-center relative ${
          isLargeScreen
            ? "flex flex-row items-center justify-center px-16"
            : "px-4"
        }`}
      >
        <div className={`${isLargeScreen ? "w-1/2" : "w-full"} relative`}>
          <img
            src={"/reifeschrank-klein.jpg"}
            alt="Dry Aging Cabinet"
            className="w-full h-full object-cover border border-gold-500 rounded-md"
          />
          <div className="absolute inset-0 bg-black opacity-30 z-10" />
          <div className="absolute inset-0 w-full h-full">
            {meats.map((meat) => (
              <MeatInfoCircle
                key={meat.id}
                meat={meat}
                onClick={() => {
                  setSelectedMeat(undefined);
                  setTimeout(() => setSelectedMeat(meat), 500);
                }}
                onMouseEnter={() => {
                  if (isLargeScreen) {
                    setSelectedMeat(undefined);
                    setTimeout(() => setSelectedMeat(meat), 500);
                  }
                }}
              />
            ))}
          </div>
        </div>

        <div
          className={`${
            isLargeScreen ? "w-1/2 h-full flex items-center justify-center" : ""
          }`}
        >
          <MeatInfoModal
            meat={selectedMeat}
            setSelectedMeat={setSelectedMeat}
            isLargeScreen={isLargeScreen ?? false}
          />
        </div>
      </div>
    </div>
  );
}
