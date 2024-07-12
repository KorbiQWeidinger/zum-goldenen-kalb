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
      <div className="flex items-center justify-center px-[5%] md:px-[15%] lg:px-[25%] w-full z-20">
        <span className="flex-1 border-t border-gray-300"></span>
        <div className="mx-2 whitespace-nowrap text-sm md:text-md font-playfair italic tracking-widest text-gold-500">
          {label}
        </div>
        <span className="flex-1 border-t border-gray-300"></span>
      </div>
      <h1
        className={`${
          textColor ? textColor : "text-white"
        } text-4xl lg:text-5xl font-bold text-center mt-8 mb-6 z-20`}
      >
        {header}
      </h1>
      <div className="flex items-center justify-center px-[5%] md:px-[15%] lg:px-[25%] w-full z-20">
        <span className="flex-1 border-t border-gray-300"></span>
        <img
          src={"/zum-goldenen-kalb/kalb-head-gold.svg"}
          className="h-12 w-12"
          alt=""
        />
        <span className="flex-1 border-t border-gray-300"></span>
      </div>
    </>
  );
}
