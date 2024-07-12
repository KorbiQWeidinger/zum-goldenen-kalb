type SpacerSize = "sm" | "md" | "lg";

const sizeMap: Record<SpacerSize, string> = {
  sm: "h-2",
  md: "h-4",
  lg: "h-8",
};

interface SpacerProps {
  size?: SpacerSize;
}

const Spacer = ({ size = "md" }: SpacerProps) => {
  const heightClass = sizeMap[size];
  return <div className={heightClass} aria-hidden="true" />;
};

export default Spacer;
