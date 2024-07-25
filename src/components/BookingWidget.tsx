import { useEffect, useRef } from "react";

const QuandooBookingWidget = () => {
  const scriptAdded = useRef(false);

  useEffect(() => {
    const scriptId = "quandoo-booking-script";

    if (!scriptAdded.current) {
      console.log("Adding script");
      // Only add the script if it hasn't been added
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://booking-widget.quandoo.com/index.js";
      script.async = true;
      script.setAttribute("data-merchant-id", "36426");
      document.body.appendChild(script);

      scriptAdded.current = true; // Set ref to true after adding script
    }
  }, []);

  return <div id="quandoo-booking-widget" className="border-gold-500 border" />;
};

export default QuandooBookingWidget;
