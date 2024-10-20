import Analytics from "analytics";
// @ts-expect-error no types
import googleAnalytics from "@analytics/google-analytics";

export const analytics = Analytics({
  app: "kalb-website",
  plugins: [
    googleAnalytics({
      measurementIds: ["G-FZ7L7B5XJN"],
    }),
  ],
});
