import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

const GA_MEASUREMENT_ID = "G-FZ7L7B5XJN";

export default function GoogleAnalytics() {
  const location = useLocation();

  useEffect(() => {
    // Initialize GA4
    ReactGA.initialize(GA_MEASUREMENT_ID);
  }, []);

  useEffect(() => {
    // Send pageview with a location
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
    });
  }, [location]);

  return null;
}
