import { useTranslation } from "react-i18next";

export const PDFMenuDownloadButton = () => {
  const { t, i18n } = useTranslation();

  const menuFile =
    i18n.language === "en"
      ? "/sylvester-2024-menu-en.pdf"
      : "/sylvester-2024-menu-de.pdf";

  return (
    <button
      onClick={() => window.open(menuFile, "_blank")}
      className="bg-gold-500 text-white text-xl uppercase font-serif rounded-sm my-6 py-3 px-6 transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
    >
      <div className="flex justify-center items-center">
        {t("opening_hours_toast.menu_button")}
      </div>
    </button>
  );
};
