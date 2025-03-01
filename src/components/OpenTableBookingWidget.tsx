import { useEffect, useRef } from "react";

export const OpenTableBookingWidget = () => {
  const scriptAdded = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    if (scriptAdded.current) {
      return;
    }

    // OpenTable widget configuration
    const baseUrl = "https://www.opentable.de/widget/reservation/loader";
    const params = {
      rid: "187992",
      type: "standard",
      theme: "standard",
      color: "8",
      dark: "true",
      iframe: "true",
      domain: "de",
      lang: "de-DE",
      newtab: "true",
      ot_source: "Restaurant website",
      font: "arialBlack",
      ot_logo: "standard",
      primary_color: "ffffff",
      primary_font_color: "ffffff",
      button_color: "DAA520",
      button_font_color: "000000",
      cfe: "true",
    };

    // Build URL with parameters
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      searchParams.append(key, value);
    });

    const widgetUrl = `${baseUrl}?${searchParams.toString()}`;

    const script = document.createElement("script");
    script.id = "open-table-script";
    script.type = "text/javascript";
    script.src = widgetUrl;
    script.async = true;
    containerRef.current.appendChild(script);

    scriptAdded.current = true;
  }, []);

  return <div ref={containerRef} id="open-table-widget" />;
};
