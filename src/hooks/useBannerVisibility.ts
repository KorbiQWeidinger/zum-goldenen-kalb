import { useState, useEffect } from "react";
import { BANNER_PERIODS, type BannerMessage } from "../constants/bannerPeriods";

export function useBannerVisibility() {
  const [currentMessage, setCurrentMessage] = useState<BannerMessage | null>(
    null
  );

  useEffect(() => {
    const checkBannerPeriod = () => {
      const now = new Date();
      const currentPeriod = BANNER_PERIODS.find((period) => {
        const start = new Date(period.startDate);
        const end = new Date(period.endDate);
        return now >= start && now <= end;
      });

      setCurrentMessage(currentPeriod?.message || null);
    };

    // Check immediately
    checkBannerPeriod();

    // Check every minute
    const interval = setInterval(checkBannerPeriod, 60000);

    return () => clearInterval(interval);
  }, []);

  return {
    isVisible: currentMessage !== null,
    message: currentMessage,
  };
}
