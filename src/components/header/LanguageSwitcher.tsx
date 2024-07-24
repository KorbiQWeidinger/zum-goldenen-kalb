import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);

  useEffect(() => {
    const handleLangChange = (lng: string) => {
      setCurrentLang(lng);
    };
    i18n.on("languageChanged", handleLangChange);
    return () => {
      i18n.off("languageChanged", handleLangChange);
    };
  }, [i18n]);

  return (
    <button
      onClick={() => i18n.changeLanguage(currentLang === "en" ? "de" : "en")}
    >
      <img
        src={`/${currentLang === "en" ? "de" : "en"}.jpg`}
        alt=""
        className="w-7 h-4"
      />
    </button>
  );
}

export default LanguageSwitcher;
