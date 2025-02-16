import { useState, useCallback, useEffect } from "react";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { TABLET } from "../../constants/breakpoints";
import { MobileHeader } from "./MobileHeader";
import { DesktopHeader } from "./DesktopHeader";

const Header = () => {
  const [headerState, setHeaderState] = useState({ show: true, dark: false });
  const [lastScrollY, setLastScrollY] = useState(0);
  const isTablet = useBreakpoint(TABLET);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    requestAnimationFrame(() => {
      setHeaderState({
        dark: currentScrollY > 200,
        show: !(currentScrollY > lastScrollY && currentScrollY > 400),
      });
      setLastScrollY(currentScrollY);
    });
  }, [lastScrollY]);

  useEffect(() => {
    let timeoutId: number;
    const throttledScroll = () => {
      if (!timeoutId) {
        timeoutId = window.setTimeout(() => {
          handleScroll();
          timeoutId = 0;
        }, 100);
      }
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", throttledScroll);
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [handleScroll]);

  if (isTablet) {
    return <MobileHeader show={headerState.show} isDark={headerState.dark} />;
  }

  return <DesktopHeader show={headerState.show} isDark={headerState.dark} />;
};

export default Header;
