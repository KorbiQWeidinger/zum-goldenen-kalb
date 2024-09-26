import { useEffect, useState } from "react";
import { MeatInfo, meats } from "../constants/meats";
import { MdClose } from "react-icons/md";
import { BlockHeader, DividerWithLogo } from "../components/BlockHeader";
import { ParallaxBanner } from "react-scroll-parallax";
import { useMediaQuery } from "@react-hookz/web";
import Spacer from "../components/ui/Spacer";

interface MeatInfoCircleProps {
  meat: MeatInfo;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const MeatInfoCircle: React.FC<MeatInfoCircleProps> = ({
  meat,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <button
      className="group absolute w-8 h-8 transition-all duration-300 ease-in-out focus:outline-none z-50"
      style={{ top: meat.position.top, left: meat.position.left }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <span className="absolute inset-0 block w-full h-full bg-gold-500 bg-opacity-80 rounded-full transform scale-75 transition-all duration-300 group-hover:bg-opacity-95"></span>
      <span className="absolute inset-0 block w-full h-full border-2 border-gold-500 border-opacity-80 rounded-full transition-all duration-300 group-hover:border-opacity-95"></span>
    </button>
  );
};

function MeatInfoModal({
  meat,
  setSelectedMeat,
}: {
  meat: MeatInfo;
  setSelectedMeat: (meat: MeatInfo | null) => void;
}) {
  return (
    <div className="fixed inset-0 bg-gray-900 text-white bg-opacity-40 flex items-center justify-center p-4 z-20">
      <div className="bg-black shadow-xl max-w-sm w-full relative rounded-md border-2 border-gold-500 border-opacity-80">
        <button
          className="absolute top-2 right-2 text-gold-500 hover:text-white"
          onClick={() => setSelectedMeat(null)}
        >
          <MdClose size={24} />
        </button>
        <div className="p-4">
          <h2 className="text-2xl text-white font-bold mb-4">{meat.name}</h2>
          <img
            src={meat.image}
            alt={meat.name}
            className="w-full h-48 object-cover mb-4"
          />
          <p className="text-white">{meat.description}</p>
        </div>
      </div>
    </div>
  );
}

function MeatInfoTooltip({
  meat,
  position,
  orientation,
}: {
  meat: MeatInfo;
  position: { top: string; left: string };
  orientation: "left" | "right";
}) {
  const getPositionStyle = () => {
    switch (orientation) {
      case "left":
        return {
          top: "50%",
          right: `calc(100% - ${position.left})`,
          transform: "translate(0, -50%)",
        };
      case "right":
        return {
          top: "50%",
          left: position.left,
          transform: "translate(0, -50%)",
        };
    }
  };

  return (
    <div
      className="mx-16 my-8 absolute z-50 bg-black shadow-xl max-w-md w-full rounded-md border-2 border-gold-500 border-opacity-80 text-white"
      style={getPositionStyle()}
    >
      <Spacer size="lg" />
      <DividerWithLogo />
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-2xl text-gold-500 font-bold mb-2">{meat.name}</h2>
        <Spacer />
        <img
          src={meat.image}
          alt={meat.name}
          className="w-fit h-full max-h-64 object-cover mb-2"
        />
        <Spacer size="lg" />
        <p className="text-sm">{meat.description}</p>
      </div>
      <Spacer size="lg" />
    </div>
  );
}

export default function DryAgingCabinet() {
  const [selectedMeat, setSelectedMeat] = useState<MeatInfo | null>(null);
  const [aspectRatio, setAspectRatio] = useState(1); // Default aspect ratio
  const [imageSrc, setImageSrc] = useState("/reifeschrank-klein.jpg");
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  useEffect(() => {
    const img = new Image();
    img.src = imageSrc;
    img.onload = () => {
      setAspectRatio(img.height / img.width);
    };

    setImageSrc(
      isLargeScreen ? "/reifeschrank-groß.jpg" : "/reifeschrank-klein.jpg"
    );
  }, [imageSrc, isLargeScreen]);

  // Preload meat images
  useEffect(() => {
    meats.forEach((meat) => {
      const img = new Image();
      img.src = meat.image;
    });
  }, []);

  const baseFontSize = 16; // Assuming 1rem = 16px
  const bannerHeightInPx = aspectRatio * window.innerWidth; // Calculate height in pixels
  const bannerHeightInRem = bannerHeightInPx / baseFontSize; // Convert pixels to rem

  return (
    <div>
      <div className="bg-black w-full py-48">
        <BlockHeader label={"Our Meats"} header={"Dry Aging Cabinet"} />
      </div>
      <ParallaxBanner
        layers={[{ image: imageSrc, speed: isLargeScreen ? -4 : -2 }]}
        className="w-full text-center border-t-[1px] border-gold-500"
        style={{
          height: `${bannerHeightInRem}rem`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30 z-10" />
        <div className="relative w-full h-full">
          {meats.map((meat) => (
            <MeatInfoCircle
              key={meat.id}
              meat={meat}
              onClick={() => !isLargeScreen && setSelectedMeat(meat)}
              onMouseEnter={() => isLargeScreen && setSelectedMeat(meat)}
              onMouseLeave={() => isLargeScreen && setSelectedMeat(null)}
            />
          ))}
        </div>
        {selectedMeat && isLargeScreen && (
          <MeatInfoTooltip
            meat={selectedMeat}
            position={selectedMeat.position}
            orientation={selectedMeat.orientation}
          />
        )}
        {selectedMeat && !isLargeScreen && (
          <MeatInfoModal
            meat={selectedMeat}
            setSelectedMeat={setSelectedMeat}
          />
        )}
      </ParallaxBanner>
    </div>
  );
}
