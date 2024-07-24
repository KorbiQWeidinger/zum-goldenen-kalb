export const DividerWithText = ({
  label,
  size,
  px,
}: {
  label: string;
  size?: string;
  px?: string;
}) => {
  return (
    <div
      className={`flex items-center justify-center ${
        px ? px : "px-[5%] md:px-[15%] lg:px-[25%]"
      } w-full z-20`}
    >
      <span className="flex-1 border-t border-gold-500"></span>
      <div
        className={`mx-2 ${
          size ? size : "text-sm md:text-md"
        } font-playfair italic tracking-widest text-gold-500 border-gold-500`}
      >
        {label}
      </div>
      <span className="flex-1 border-t border-gold-500"></span>
    </div>
  );
};

export const DividerWithLogo = () => {
  return (
    <div className="flex items-center justify-center px-[5%] md:px-[15%] lg:px-[25%] w-full z-20">
      <span className="flex-1 border-t border-gold-500"></span>
      <img src={"/kalb-head-gold.svg"} className="h-12 w-12" alt="" />
      <span className="flex-1 border-t border-gold-500"></span>
    </div>
  );
};

export function BlockHeader({
  label,
  header,
  textColor,
}: {
  label: string;
  header: string;
  textColor?: string;
}) {
  return (
    <>
      <DividerWithText label={label} />
      <h1
        className={`${
          textColor ? textColor : "text-white"
        } text-4xl lg:text-5xl font-bold text-center mt-8 mb-6 z-20`}
      >
        {header}
      </h1>
      <DividerWithLogo />
    </>
  );
}
