import { useState, useEffect } from "react";
import { BREAKPOINTS, type Breakpoint } from "../constants/breakpoints";

export function useBreakpoint(breakpoint: Breakpoint) {
  const [isBelow, setIsBelow] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      setIsBelow(window.innerWidth < BREAKPOINTS[breakpoint]);
    };

    // Check immediately
    checkWidth();

    // Add event listener for window resize
    window.addEventListener("resize", checkWidth);

    // Cleanup
    return () => window.removeEventListener("resize", checkWidth);
  }, [breakpoint]);

  return isBelow;
}
