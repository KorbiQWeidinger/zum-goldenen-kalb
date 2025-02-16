// Breakpoint values (in pixels)
export const BREAKPOINTS = {
  mobile: 640,
  tablet: 768,
  desktopSmall: 1024,
  desktopLarge: 1280,
  desktopXLarge: 1536,
} as const;

// Individual breakpoint constants for easier usage
export const MOBILE = "mobile";
export const TABLET = "tablet";
export const DESKTOP_SMALL = "desktopSmall";
export const DESKTOP_LARGE = "desktopLarge";
export const DESKTOP_XLARGE = "desktopXLarge";

// Type for the breakpoint names
export type Breakpoint = keyof typeof BREAKPOINTS;

// These match Tailwind's default breakpoints for consistency
// MOBILE: sm (640px)
// TABLET: md (768px)
// DESKTOP_SMALL: lg (1024px)
// DESKTOP_LARGE: xl (1280px)
// DESKTOP_XLARGE: 2xl (1536px)
