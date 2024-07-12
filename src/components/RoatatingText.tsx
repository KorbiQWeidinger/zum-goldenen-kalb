import { useState, useEffect } from "react";

const TEXTS = [
  "Zum goldenen Kalb ist Münchens erstes und einzigartiges New York Steakhouse.",
  "Hier gibt es die ehrlichsten Steaks der Stadt direkt gegenüber der Schranne am Viktualienmarkt.",
];

function RotatingTextComponent() {
  const [currentText, setCurrentText] = useState(TEXTS[0]);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setOpacity(0);

      setTimeout(() => {
        setCurrentText((prevText) => {
          const nextIndex = (TEXTS.indexOf(prevText) + 1) % TEXTS.length;
          return TEXTS[nextIndex];
        });
        setTimeout(() => {
          setOpacity(1);
        }, 100);
      }, 900);
    }, 8000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex justify-center items-center h-32">
      <p
        className="font-playfair italic text-xl text-white"
        style={{
          transition: "opacity 1s ease-in-out",
          opacity: opacity,
        }}
      >
        {currentText}
      </p>
    </div>
  );
}

export default RotatingTextComponent;
