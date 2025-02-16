import { useState, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  // Get the current language from URL or fallback to i18n's language
  const urlParams = useMemo(
    () => new URLSearchParams(location.search),
    [location.search]
  );
  const urlLang = urlParams.get("lang");
  const [currentLang, setCurrentLang] = useState(urlLang || i18n.language);

  // Sync URL parameter with i18n on mount and URL changes
  useEffect(() => {
    const newLang = urlParams.get("lang");
    if (newLang && newLang !== i18n.language) {
      i18n.changeLanguage(newLang);
      setCurrentLang(newLang);
    }
  }, [location.search, i18n, urlParams]);

  const handleLanguageChange = () => {
    const newLang = currentLang === "en" ? "de" : "en";
    setCurrentLang(newLang);
    i18n.changeLanguage(newLang);

    const searchParams = new URLSearchParams(location.search);
    searchParams.set("lang", newLang);
    navigate(`${location.pathname}?${searchParams.toString()}`, {
      replace: true,
    });
  };

  return (
    <button onClick={handleLanguageChange} className="focus:outline-none">
      <img
        src={`/${currentLang === "en" ? "de" : "en"}.jpg`}
        alt=""
        className="w-7 h-4"
      />
    </button>
  );
}

export default LanguageSwitcher;
