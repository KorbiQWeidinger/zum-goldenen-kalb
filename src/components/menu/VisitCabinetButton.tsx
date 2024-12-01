import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const VisitCabinetButton = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/dry-aging-cabinet")}
      className="bg-gold-500 text-white text-xl uppercase font-serif rounded-sm my-6 py-3 px-6 transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
    >
      <div className="flex justify-center items-center">
        {t("menu.dry_aging_cabinet")}
      </div>
    </button>
  );
};
