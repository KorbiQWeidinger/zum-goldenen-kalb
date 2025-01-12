import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./NavButton";
import { IgButton } from "./IgButton";
import { FbButton } from "./FbButton";
import { MobileHeaderMenu } from "./MobileHeaderMenu";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [darkHeader, setDarkHeader] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 200) {
        setDarkHeader(true);
      } else {
        setDarkHeader(false);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 400) {
        // Scrolling down
        setShowHeader(false);
      } else {
        // Scrolling up
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`bg-black ${
          darkHeader ? "bg-opacity-90" : "bg-opacity-60"
        } fixed left-0 right-0 z-50 transition-all duration-1000 ${
          showHeader ? "top-[40px]" : "-translate-y-full"
        } w-screen`}
      >
        <div className="mx-auto px-8 lg:px-16">
          <div className="flex justify-between items-center py-1 h-24">
            {/* Logo and hamburger menu */}
            <div className="flex justify-between lg:justify-start lg:flex-1 w-full">
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
              <button
                className="lg:hidden text-white"
                onClick={toggleMobileMenu}
              >
                <FontAwesomeIcon
                  icon={faBars}
                  size="2xl"
                  className="hover:text-gold-500"
                />
              </button>
            </div>

            {/* Desktop Buttons */}
            <div className="hidden lg:flex flex-1 justify-end items-stretch text-white">
              <Button label={t("header.home")} onClick={() => navigate("/")} />
              <Button
                label={t("header.about")}
                onClick={() => navigate("/about-us")}
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

      {mobileMenuOpen && (
        <MobileHeaderMenu
          toggleMobileMenu={toggleMobileMenu}
          isOpen={mobileMenuOpen}
        />
      )}
    </>
  );
};

export default Header;
