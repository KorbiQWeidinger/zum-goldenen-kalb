interface BannerMessage {
  en: string;
  de: string;
}

interface BannerPeriod {
  startDate: string; // ISO date string
  endDate: string; // ISO date string
  message: BannerMessage;
}

export const BANNER_PERIODS: BannerPeriod[] = [
  // Carnival Party 2025
  {
    startDate: "2024-12-01",
    endDate: "2025-03-04",
    message: {
      en: "Join us for our Carnival Party on March 4th, 2025! (Restaurant closed that day)",
      de: "Feiern Sie mit uns Fasching am 4. März 2025! (Restaurant an diesem Tag geschlossen)",
    },
  },
  // BAUMA Monday Opening
  {
    startDate: "2025-03-17",
    endDate: "2025-04-07",
    message: {
      en: "Special opening on Monday, April 7th for BAUMA!",
      de: "Sonderöffnung am Montag, dem 7. April zur BAUMA!",
    },
  },
  // EXPO Special Opening
  {
    startDate: "2025-08-24",
    endDate: "2025-10-06",
    message: {
      en: "Special opening on Sunday & Monday, October 5-6 for the EXPO!",
      de: "Sonderöffnung am Sonntag & Montag, 5.-6. Oktober zur EXPO!",
    },
  },
  // December Monday Openings
  {
    startDate: "2025-11-25",
    endDate: "2025-12-29",
    message: {
      en: "We are open on Mondays in December! Closed Dec 24-26 for Christmas.",
      de: "Wir haben im Dezember montags geöffnet! Geschlossen vom 24.-26. Dezember.",
    },
  },
  // New Year's Eve
  {
    startDate: "2025-12-10",
    endDate: "2025-12-31",
    message: {
      en: "Join us for our New Year's Eve special menu!",
      de: "Feiern Sie mit uns ins neue Jahr mit unserem Silvester-Menü!",
    },
  },
];

export type { BannerMessage, BannerPeriod };
