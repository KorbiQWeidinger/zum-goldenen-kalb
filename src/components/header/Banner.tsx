import { useTranslation } from "react-i18next";
import type { BannerMessage } from "../../constants/bannerPeriods";

interface BannerProps {
  message: BannerMessage | null;
}

export function Banner({ message }: BannerProps) {
  const { i18n } = useTranslation();

  if (!message) return null;

  return (
    <div className="bg-gold-500 text-white text-center py-2 w-full min-h-[40px] flex items-center justify-center">
      {message[i18n.language as keyof BannerMessage]}
    </div>
  );
}
