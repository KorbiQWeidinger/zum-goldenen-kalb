import { useLocation, useNavigationType } from "react-router-dom";
import { PropsWithChildren, useEffect } from "react";

export function ScrollToTop({ children }: PropsWithChildren) {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    // Avoid scrolling on "POP" type navigation, i.e., back/forward navigation
    if (navigationType !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [location, navigationType]); // Triggered when location changes

  return children;
}
