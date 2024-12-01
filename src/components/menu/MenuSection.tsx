import { ReactNode } from "react";
import { DividerWithText } from "../BlockHeader";
import Spacer from "../ui/Spacer";

export const TwoColumns = ({
  left,
  right,
}: {
  left: ReactNode;
  right: ReactNode;
}) => {
  return (
    <div className="flex flex-col xl:flex-row xl:space-x-16 justify-center items-start md:items-start space-y-0 px-[5%] md:px-[15%] lg:px-[25%] w-full">
      <div className="w-full md:flex-1">{left}</div>
      <div className="w-full md:flex-1">{right}</div>
    </div>
  );
};

export const MenuSection = ({
  left,
  right,
  label,
}: {
  left: ReactNode;
  right: ReactNode;
  label: string;
}) => {
  return (
    <>
      <DividerWithText label={label} />
      <Spacer size="lg" />
      <TwoColumns left={left} right={right} />
    </>
  );
};
