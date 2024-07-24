import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const TEXTS = ["home.text_1", "home.text_2"];

function RotatingTextComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setOpacity(0);

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % TEXTS.length);
        setTimeout(() => {
          setOpacity(1);
        }, 100);
      }, 900);
    }, 6000);

    return () => clearInterval(intervalId);
  }, [i18n.language]);

  return (
    <div className="flex justify-center items-center h-32">
      <p
        className="font-times italic text-xl text-white"
        style={{
          transition: "opacity 1s ease-in-out",
          opacity: opacity,
        }}
      >
        {t(TEXTS[currentIndex])}
      </p>
    </div>
  );
}

export default RotatingTextComponent;
