import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // Dependency on pathname ensures effect runs on route change
}

export default useScrollToTop;
