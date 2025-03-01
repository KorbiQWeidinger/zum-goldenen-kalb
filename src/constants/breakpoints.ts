export const BREAKPOINTS = {
  mobile: 640,
  tablet: 768,
  desktopSmall: 1024,
  desktopLarge: 1280,
  desktopXLarge: 1536,
} as const;

export type Breakpoint = keyof typeof BREAKPOINTS;
