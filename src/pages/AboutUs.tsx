import { BlockHeader } from "../components/BlockHeader";
import { ParallaxBanner } from "react-scroll-parallax";

export function AboutUs() {
  return (
    <>
      <ParallaxBanner
        layers={[{ image: "/birthday.JPG", speed: -25 }]}
        className="bg-center h-screen pt-24 flex flex-col items-center justify-center min-h-screen"
      >
        <div className="absolute inset-0 bg-black opacity-40 z-10" />
        <img
          src={"/kalb-text.png"}
          className="logo w-full px-4 md:px-0 md:w-2/3 mx-32 mt-8 z-20"
          alt="Zum Goldenen Kalb"
        />
      </ParallaxBanner>
      <div className="bg-black text-white py-44 px-4 md:px-16 text-center">
        <BlockHeader label="Coming Soon" header="Coming Soon" />
      </div>
    </>
  );
}
