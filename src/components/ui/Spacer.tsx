type SpacerSize = "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";

const sizeMap: Record<SpacerSize, string> = {
  sm: "h-2",
  md: "h-4",
  lg: "h-8",
  xl: "h-12",
  "2xl": "h-24",
  "3xl": "h-32",
  "4xl": "h-40",
};

interface SpacerProps {
  size?: SpacerSize;
}

const Spacer = ({ size = "md" }: SpacerProps) => {
  const heightClass = sizeMap[size];
  return <div className={heightClass} aria-hidden="true" />;
};

export default Spacer;
