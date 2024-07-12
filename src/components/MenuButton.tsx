import { useState } from "react";

export function MenuButton() {
  const [showPDF, setShowPDF] = useState(false);

  const togglePDF = () => {
    setShowPDF(!showPDF);
  };

  const path = "/zum-goldenen-kalb/ZGK_Speisekarte.pdf";

  return (
    <div>
      <button
        onClick={() => setShowPDF(true)}
        className="mt-6 text-lg w-24 h-12 bg-transparent border border-white text-white relative overflow-hidden hover:bg-white hover:text-black transition-colors duration-300 z-20"
      >
        Menu
      </button>
      {showPDF && (
        <div
          className="fixed inset-0 bg-black bg-opacity-35 z-50 flex justify-center items-center"
          onClick={togglePDF}
        >
          <iframe
            src={path}
            style={{ width: "min(80%, 750px)", height: "calc(100vh - 5rem)" }}
          />
        </div>
      )}
    </div>
  );
}
