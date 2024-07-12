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
      // Start fade out
      setOpacity(0);

      setTimeout(() => {
        // After fade-out, change the text and start fade-in
        setCurrentText((prevText) => {
          const nextIndex = (TEXTS.indexOf(prevText) + 1) % TEXTS.length;
          return TEXTS[nextIndex];
        });
        // Delay the fade-in to ensure fade-out is visible
        setTimeout(() => {
          setOpacity(1);
        }, 100); // Short delay to ensure the fade-in starts after the DOM has updated
      }, 900); // Slightly less than 1s to ensure the opacity change is visible
    }, 8000); // Change text every 8 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex justify-center items-center my-16">
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
