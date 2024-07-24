import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "./NavButton";
import { useNavigate } from "react-router-dom";
import { IgButton } from "./IgButton";
import { FbButton } from "./FbButton";
import { useEffect } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import Spacer from "../ui/Spacer";
import { useTranslation } from "react-i18next";

const useLockBodyScroll = (lock: boolean) => {
  useEffect(() => {
    if (lock) {
      // Get original body overflow
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [lock]); // Only re-run the effect if `lock` changes
};

export const MobileHeaderMenu = ({
  isOpen,
  toggleMobileMenu,
}: {
  isOpen: boolean;
  toggleMobileMenu: () => void;
}) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  useLockBodyScroll(isOpen);

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-start pt-5 min-h-screen max-h-screen w-screen">
      <button onClick={toggleMobileMenu} className="absolute top-8 right-8">
        <FontAwesomeIcon
          icon={faTimes}
          size="2xl"
          className="text-white hover:text-gold-500"
        />
      </button>
      <img
        src={"/kalb-head-gold.png"}
        className="h-32 my-10 mr-2 transition-all duration-300"
        alt="Logo"
      />
      <Button
        label={t("header.home")}
        onClick={() => {
          navigate("/");
          toggleMobileMenu();
        }}
      />
      <Button
        label={t("header.about")}
        onClick={() => {
          navigate("/");
          toggleMobileMenu();
        }}
      />
      <Button
        label={t("header.menu")}
        onClick={() => {
          navigate("/menu");
          toggleMobileMenu();
        }}
      />
      <Button
        label={t("header.reservations")}
        onClick={() => {
          navigate("/reservations");
          toggleMobileMenu();
        }}
      />
      <div className="flex w-full justify-center space-x-10 mt-8 mb-6 text-white">
        <IgButton size={"xl"} />
        <FbButton size={"xl"} />
      </div>
      <Spacer />
      <LanguageSwitcher />
      <Spacer size="xl" />
    </div>
  );
};
