import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "./NavButton";
import { IgButton } from "./IgButton";
import { FbButton } from "./FbButton";
import LanguageSwitcher from "./LanguageSwitcher";
import { Banner } from "./Banner";
import { useBannerVisibility } from "../../hooks/useBannerVisibility";

interface DesktopHeaderProps {
  show: boolean;
  isDark: boolean;
}

export function DesktopHeader({ show, isDark }: DesktopHeaderProps) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { message: bannerMessage } = useBannerVisibility();

  return (
    <header
      className={`bg-black ${
        isDark ? "bg-opacity-90" : "bg-opacity-60"
      } fixed left-0 right-0 z-50 transition-all duration-1000 ${
        show ? "top-0 translate-y-0" : "-translate-y-full"
      } w-screen`}
    >
      {bannerMessage && <Banner message={bannerMessage} />}
      <div className="mx-auto px-8 lg:px-16">
        <div className="flex justify-between items-center py-1 h-24">
          <div className="flex justify-start flex-1 w-full">
            <div
              className="cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => navigate("/")}
            >
              <img
                src={"/kalb-head-gold.png"}
                className="h-20 transition-all duration-300"
                alt="Logo"
                style={{
                  filter: isHovered ? "drop-shadow(0 0 3px #FFD700)" : "none",
                }}
              />
            </div>
          </div>

          <div className="flex flex-1 justify-end items-stretch text-white">
            <Button label={t("header.home")} onClick={() => navigate("/")} />
            <Button
              label={t("header.opening_hours")}
              onClick={() => navigate("/opening-hours")}
            />
            <Button
              label={t("header.menu")}
              onClick={() => navigate("/menu")}
            />
            <Button
              label={t("header.reservations")}
              onClick={() => navigate("/reservations")}
            />
            <div className="w-6" />
            <IgButton size="xl" />
            <div className="w-6" />
            <FbButton size="xl" />
            <div className="w-6" />
            <div className="flex items-center justify-center">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
