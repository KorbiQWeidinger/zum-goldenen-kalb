import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./NavButton";
import { IgButton } from "./IgButton";
import { FbButton } from "./FbButton";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import Spacer from "../ui/Spacer";
import { Banner } from "./Banner";
import { useBannerVisibility } from "../../hooks/useBannerVisibility";
import { useNavigateWithLang } from "../../hooks/useNavigateWithLang";
interface MobileHeaderProps {
  show: boolean;
  isDark: boolean;
}

// Private component only used within MobileHeader
function MobileMenu({ onClose }: { onClose: () => void }) {
  const navigate = useNavigateWithLang();
  const { t } = useTranslation();
  const { message: bannerMessage } = useBannerVisibility();

  const handleNavigation = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-start min-h-screen max-h-screen w-screen overflow-auto">
      <button onClick={onClose} className="absolute top-8 right-8">
        <FontAwesomeIcon
          icon={faTimes}
          size="2xl"
          className="text-white hover:text-gold-500"
        />
      </button>
      <img
        src={"/kalb-head-gold.png"}
        className={`${
          bannerMessage ? "h-24 my-6" : "h-32 my-10"
        } mr-2 transition-all duration-300`}
        alt="Logo"
      />
      <Button label={t("header.home")} onClick={() => handleNavigation("/")} />
      <Button
        label={t("header.opening_hours")}
        onClick={() => handleNavigation("/opening-hours")}
      />
      <Button
        label={t("header.menu")}
        onClick={() => handleNavigation("/menu")}
      />
      <Button
        label={t("header.reservations")}
        onClick={() => handleNavigation("/reservations")}
      />
      <div className="flex w-full justify-center space-x-10 mt-8 mb-6 text-white">
        <IgButton size="xl" />
        <FbButton size="xl" />
      </div>
      <Spacer />
      <LanguageSwitcher />
      <Spacer />
      {bannerMessage && (
        <>
          <Spacer size="lg" />
          <Banner message={bannerMessage} />
        </>
      )}
    </div>
  );
}

export function MobileHeader({ show, isDark }: MobileHeaderProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigateWithLang();

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <>
      <header
        className={`bg-black ${
          isDark ? "bg-opacity-90" : "bg-opacity-60"
        } fixed left-0 right-0 z-50 transition-all duration-1000 ${
          show ? "top-0 translate-y-0" : "-translate-y-full"
        } w-screen`}
      >
        <div className="mx-auto px-8">
          <div className="flex justify-between items-center py-1 h-24">
            <div className="flex justify-between w-full">
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
              <button className="text-white" onClick={toggleMobileMenu}>
                <FontAwesomeIcon
                  icon={faBars}
                  size="2xl"
                  className="hover:text-gold-500"
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {mobileMenuOpen && <MobileMenu onClose={toggleMobileMenu} />}
    </>
  );
}
