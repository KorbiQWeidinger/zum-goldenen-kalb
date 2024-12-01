export const STARTERS_LEFT = {
  de: [
    {
      title: "HOKKAIDOKÜRBISSUPPE",
      description: "Ingwer | Crème fraîche | Kürbiskern | Zitrone",
      price: 12,
    },
    {
      title: "PIMIENTOS DE PADRÓN",
      description: "Chipotle Mayo | Meersalz",
      price: 12,
    },
    {
      title: "TATAR VOM WEIDERIND",
      description: "Schwarzer Knoblauch | eingelegte Rote Zwiebel | Senfsaat",
      price: "kl. 21 | gr. 26",
    },
    {
      title: "TATAR VOM WILDLACHS",
      description: "Gurke | Avocado | Ponzu | Buttermilch | Dill | Wantancrisp",
      price: "kl. 22 | gr. 27",
    },
  ],
  en: [
    {
      title: "PUMPKIN CREAM SOUP",
      description: "ginger | crème fraîche | pumpkin seed | lemon",
      price: 12,
    },
    {
      title: "PIMIENTOS DE PADRÓN",
      description: "chipotle mayo | sea salt",
      price: 12,
    },
    {
      title: "BEEF TARTAR",
      description: "black garlic | pickled red onion | mustard seed",
      price: "sm 21 | lg 26",
    },
    {
      title: "SALMON TARTAR",
      description:
        "cucumber | avocado | ponzu | buttermilk | dill | wanton crisp",
      price: "sm 22 | lg 27",
    },
  ],
} as const;

export const STARTERS_RIGHT = {
  de: [
    {
      title: "CLASSIC CEASAR SALAD",
      description: "Parmesan | Croûtons | Speck",
      price: 15,
    },
    {
      title: "FRANZÖSISCHE ZWIEBELSUPPE",
      description: "Buttercroûtons | Gruyère | Schnittlauch",
      price: 11,
    },
    {
      title: "MARINIERTE BEETE & FRISCHKÄSE",
      description:
        "Gelbe und Rote Beete | Ziegenfrischkäse | Walnuss | Kartoffel",
      price: 19,
    },
    {
      title: "CANARD AU VIN",
      description: "Ente | Grüner Apfel | Radieschen | Spinat",
      price: 21,
    },
  ],
  en: [
    {
      title: "CLASSIC CAESAR SALAD",
      description: "parmesan cheese | croutons | bacon",
      price: 15,
    },
    {
      title: "FRENCH ONION SOUP",
      description: "croutons | gruyère cheese | chives",
      price: 11,
    },
    {
      title: "MARINATED BEETROOT AND CREAM CHEESE",
      description: "yellow and red beetroot | goat cheese | walnut | potato",
      price: 19,
    },
    {
      title: "CANARD AU VIN",
      description: "duck | green apple | radish | spinach",
      price: 21,
    },
  ],
} as const;

export const CLASSICS_LEFT = {
  de: [
    {
      title: "PRIME RIBEYE STEAK",
      description: "US Angus - ca. 270g",
      price: 59,
    },
    {
      title: "PRIME FILET STEAK",
      description: "Australian Angus - ca. 200g",
      price: 57,
    },
    {
      title: "GESCHMORTE GOLDENE KALBSBACKEN",
      description:
        "Getrüffeltes Kartoffel-Mousseline | Buchenholzrauch | gerösteter Rosenkohl",
      price: 36,
    },
    {
      title: "PRIME CHEESEBURGER VOM FILET",
      description: "Pommes | Cheddar | Burgersauce",
      price: 28,
    },
  ],
  en: [
    {
      title: "PRIME RIBEYE STEAK",
      description: "US angus - 270g / ≈ 9 oz",
      price: 59,
    },
    {
      title: "PRIME FILET STEAK",
      description: "australian angus - 200g / ≈ 7 oz",
      price: 57,
    },
    {
      title: "BRAISED VEAL CHEEK",
      description:
        "truffled mashed potatoes | beech wood smoke | roasted brussels sprouts",
      price: 36,
    },
    {
      title: "CHEESEBURGER",
      description: "fries | cheddar | brioche bun | burger sauce",
      price: 28,
    },
  ],
} as const;

export const CLASSICS_RIGHT = {
  de: [
    {
      title: "DORADE ROYALE",
      description: "Risotto | Wirsing | Beurre Blanc | Saiblingskaviar",
      price: 34,
    },
    {
      title: "SPARERIBS VOM DUROC-SCHWEIN",
      description: "Coleslaw | Pommes | BBQ Sauce",
      price: 33,
    },
    {
      title: "GERÖSTETER HOKKAIDOKÜRBIS",
      description:
        "Blumenkohl | eingelegte Buchenpilze | Zwiebelmarmelade | Haselnuss",
      price: 27,
    },
    {
      title: "TRÜFFEL PASTA",
      description:
        "Hausgemachte Trüffelsauce | Frischer Schwarzer Trüffel | Parmesan",
      price: 25,
    },
  ],
  en: [
    {
      title: "SEA BREAM",
      description:
        "risotto | savoy cabbage | beurre blanc | arctic char caviar",
      price: 34,
    },
    {
      title: "SPARERIBS FROM THE DUROC PIG",
      description: "coleslaw | fries | BBQ sauce",
      price: 33,
    },
    {
      title: "ROASTED HOKKAIDO PUMPKIN",
      description: "cauliflower | pickled mushrooms | onion jam | hazelnut",
      price: 27,
    },
    {
      title: "TRUFFLE PASTA",
      description:
        "homemade truffle sauce | fresh black truffle | parmesan cheese",
      price: 25,
    },
  ],
} as const;

export const OYSTER_SPECIAL = {
  de: [
    {
      title: "ANCELIN FINE DE CLAIRE",
      description: "Zitrone | Schalotten-Vinaigrette",
      price: 6.5,
      options: [
        { size: "0,1 l", price: 29 },
        { size: "0,375 l", price: 95 },
      ],
    },
  ],
  en: [
    {
      title: "ANCELIN FINE DE CLAIRE",
      description: "lemon | shallot vinaigrette",
      price: 6.5,
      options: [
        { size: "0.1 l", price: 29 },
        { size: "0.375 l", price: 95 },
      ],
    },
  ],
} as const;

export const PREPARATIONS_LEFT = {
  de: [
    {
      title: "BLACK & BLUE",
      description: "außen geröstet, innen kalt und roh",
    },
    {
      title: "RARE 42 - 45°C",
      description: "außen kräftig angebraten und im Inneren noch roh",
    },
    {
      title: "MEDIUM RARE 46 - 49°C",
      description:
        "bei mittlerer Hitze gebraten, erscheint dadurch immer noch blutig",
    },
  ],
  en: [
    {
      title: "BLACK & BLUE",
      description: "Roasted on the outside, cold and raw on the inside.",
    },
    {
      title: "RARE 42 - 45°C",
      description: "Seared on the outside, raw on the inside.",
    },
    {
      title: "MEDIUM RARE 46 - 49°C",
      description:
        "Cooked to perfection, evenly pink from the outside to the inside.",
    },
  ],
} as const;

export const PREPARATIONS_RIGHT = {
  de: [
    {
      title: "MEDIUM 53 - 56°C",
      description:
        "auf den Punkt gegart und von außen nach innen gleichmäßig rosa gefärbt",
    },
    {
      title: "MEDIUM WELL 59 - 63°C",
      description:
        "bei kleinem Feuer langsam gebraten, so dass der Kern noch ganz leicht rosa ist",
    },
    {
      title: "WELL DONE 68°C +",
      description: "durchgebraten, grau (Filet: nur Butterflycut)",
    },
  ],
  en: [
    {
      title: "MEDIUM 53 - 56°C",
      description:
        "Slowly seared over low heat, with the center still slightly pink.",
    },
    {
      title: "MEDIUM WELL 59 - 63°C",
      description: "Cooked over medium heat, still appears bloody inside.",
    },
    {
      title: "WELL DONE 68°C +",
      description: "Fully cooked, gray (Filet: only Butterfly cut)",
    },
  ],
} as const;

export const SIDES_LEFT = {
  de: [
    { title: "GEGRILLTER WILDER BROKKOLI", price: 7 },
    { title: "TRÜFFEL POMMES", price: 14 },
    { title: "POMMES", price: 6 },
    { title: "TWICE BAKED POTATO", price: 8 },
    { title: "SAUTIERTE PILZE", price: 8 },
    { title: "BEILAGENSALAT", price: 6 },
  ],
  en: [
    { title: "GRILLED BROCCOLINI", price: 7 },
    { title: "TRUFFEL FRIES", price: 14 },
    { title: "FRIES", price: 6 },
    { title: "TWICE BAKED POTATO", price: 8 },
    { title: "SAUTÈED MUSHROOMS", price: 8 },
    { title: "MIXED SALAD", price: 6 },
  ],
} as const;

export const SIDES_RIGHT = {
  de: [
    { title: "CREAMED CORN", price: 7 },
    { title: "PAPRIKARAGOUT", price: 7 },
    { title: "SPECKBOHNEN - CASSOULET", price: 8 },
    { title: "MAC AND CHEESE", price: 9 },
    { title: "KARTOFFELPÜREE", price: 7 },
    { title: "GETRÜFFELTES KARTOFFELPÜREE", price: 10 },
  ],
  en: [
    { title: "CREAMED CORN", price: 7 },
    { title: "BELL PEPPER RAGOUT", price: 7 },
    { title: "BACON AND BEAN CASSOULET", price: 8 },
    { title: "MAC AND CHEESE", price: 9 },
    { title: "MASHED POTATOES", price: 7 },
    { title: "TRUFFLED MASHED POTATOES", price: 10 },
  ],
} as const;

export const SAUCES_LEFT = {
  de: [
    { title: "PFEFFERRAHMSAUCE", price: 5 },
    { title: "SAUCE BÉARNAISE", price: 5 },
    { title: "BBQ SAUCE", price: 4 },
  ],
  en: [
    { title: "PEPPERCORN CREAM SAUCE", price: 5 },
    { title: "SAUCE BÉARNAISE", price: 5 },
    { title: "BBQ SAUCE", price: 4 },
  ],
} as const;

export const SAUCES_RIGHT = {
  de: [
    { title: "CHIMICHURRI", price: 4 },
    { title: "CAFÉ DE PARIS BUTTER", price: 4 },
    { title: "KALBSJUS", price: 5 },
  ],
  en: [
    { title: "CHIMICHURRI", price: 4 },
    { title: "CAFÉ DE PARIS BUTTER", price: 4 },
    { title: "PORT WINE JUS", price: 5 },
  ],
} as const;

export const DESSERTS_LEFT = {
  de: [
    {
      title: "NEW YORK CHEESECAKE",
      description: "Waldbeeren | Vanille | Butterkeks",
      price: 14,
    },
    {
      title: "WARMER SCHOKOLADENKUCHEN",
      description: "Sauerkirsche | marinierte Beeren",
      price: 14,
    },
    {
      title: "SORBET ODER EIS",
      price: 4,
    },
  ],
  en: [
    {
      title: "NEW YORK CHEESECAKE",
      description: "berries | vanilla | cookies",
      price: 14,
    },
    {
      title: "WARM CHOCOLATE CAKE",
      description: "sour cherry ice cream | marinated berries",
      price: 14,
    },
    {
      title: "SORBET OR ICE CREAM",
      price: 4,
    },
  ],
} as const;

export const DESSERTS_RIGHT = {
  de: [
    {
      title: "KLASSISCHE CRÈME BRÛLÉE",
      price: 8,
    },
    {
      title: "SCHOKOLADENMOUSSE",
      description: "Erdnuss | Salzkaramell | Crunch",
      price: 14,
    },
  ],
  en: [
    {
      title: "CLASSIC CRÈME BRÛLÉE",
      price: 8,
    },
    {
      title: "CHOCOLATE MOUSSE",
      description: "peanut | salted caramel | crumble",
      price: 14,
    },
  ],
} as const;

export const DESSERTS_IN_A_GLASS_LEFT = {
  de: [
    { title: "ESPRESSO MARTINI", price: 15.5 },
    { title: "AMARETTO SOUR", price: 12.5 },
    { title: "NEGRONI SOUR", price: 15.5 },
  ],
  en: [
    { title: "ESPRESSO MARTINI", price: 15.5 },
    { title: "AMARETTO SOUR", price: 12.5 },
    { title: "NEGRONI SOUR", price: 15.5 },
  ],
} as const;

export const DESSERTS_IN_A_GLASS_RIGHT = {
  de: [
    { title: "MAPLE OLD FASHIONED", price: 18.5 },
    { title: "SKIN GIN & TONIC", price: 19.9 },
    {
      title: "RIESLING BEERENAUSLESE",
      description: "Dr. Loosen, Mosel | 0,187 l",
      price: 45,
    },
  ],
  en: [
    { title: "MAPLE OLD FASHIONED", price: 18.5 },
    { title: "SKIN GIN & TONIC", price: 19.9 },
    {
      title: "RIESLING BEERENAUSLESE",
      description: "Dr. Loosen, Mosel | 0.187 l",
      price: 45,
    },
  ],
} as const;

export const SPIRITS_LEFT = {
  de: [
    {
      title: "PISTAZIE, HERZOG",
      description: "Österreich | 2cl",
      price: 14.5,
    },
    {
      title: "ROTE RÜBE, HERZOG",
      description: "Österreich | 2cl",
      price: 14.5,
    },
    {
      title: "SCHLOSSBRAND, SCHLOSS HALBTURN",
      description: "Österreich | 2cl",
      price: 14,
    },
  ],
  en: [
    {
      title: "PISTACHIO, HERZOG",
      description: "Austria | 2cl",
      price: 14.5,
    },
    {
      title: "BEETROOT, HERZOG",
      description: "Austria | 2cl",
      price: 14.5,
    },
    {
      title: "SCHLOSSBRAND, SCHLOSS HALBTURN",
      description: "Austria | 2cl",
      price: 14,
    },
  ],
} as const;

export const SPIRITS_RIGHT = {
  de: [
    {
      title: "ZIRBE HERZOG",
      description: "Österreich | 2cl",
      price: 12.5,
    },
    {
      title: "VOGELBEERE, PAUSCH",
      description: "Bayern | 2cl",
      price: 11.5,
    },
    {
      title: "APFEL HIMBEERE, HERZOG",
      description: "Österreich | 2cl",
      price: 11.5,
    },
  ],
  en: [
    {
      title: "SWISS PINE, HERZOG",
      description: "Austria | 2cl",
      price: 12.5,
    },
    {
      title: "ROWANBERRY, PAUSCH",
      description: "Bavaria | 2cl",
      price: 11.5,
    },
    {
      title: "APPEL-RASPBERRY, HERZOG",
      description: "Austria | 2cl",
      price: 11.5,
    },
  ],
} as const;

export const COFFEE_AND_TEA_LEFT = {
  de: [
    { title: "ESPRESSO", price: 3.1 },
    {
      title: "TEE",
      description:
        "Kräuter | Earl Grey | Früchte | Darjeeling | Rooibos | Grüner",
      price: 5.5,
    },
  ],
  en: [
    { title: "ESPRESSO", price: 3.1 },
    {
      title: "TEA",
      description: "herbal | earl grey | fruit | darjeeling | rooibos | green",
      price: 5.5,
    },
  ],
} as const;

export const COFFEE_AND_TEA_RIGHT = {
  de: [
    { title: "ESPRESSO DOPPIO", price: 5.1 },
    { title: "CAPPUCCINO", price: 4.1 },
  ],
  en: [
    { title: "ESPRESSO DOPPIO", price: 5.1 },
    { title: "CAPPUCCINO", price: 4.1 },
  ],
} as const;

export const OYSTER_SPECIAL_ITEMS = {
  de: [
    {
      title: "VEUVE CLICQUOT BRUT",
      addition: "+3 ANCELIN FINE DE CLAIRE",
      volume: "0,1 l.",
      price: 29,
    },
    {
      title: "RUINART ROSÉ",
      addition: "+6 ANCELIN FINE DE CLAIRE",
      volume: "0,375 l.",
      price: 95,
    },
    {
      title: "ANCELIN FINE DE CLAIRE PRO STÜCK",
      addition: "Zitrone | Schalotten-Vinaigrette",
      price: 6.5,
    },
  ],
  en: [
    {
      title: "VEUVE CLICQUOT BRUT",
      addition: "+3 ANCELIN FINE DE CLAIRE",
      volume: "0.1 l",
      price: 29,
    },
    {
      title: "RUINART ROSÉ",
      addition: "+6 ANCELIN FINE DE CLAIRE",
      volume: "0.375 l",
      price: 95,
    },
    {
      title: "ANCELIN FINE DE CLAIRE APIECE",
      addition: "lemon | shallot vinaigrette",
      price: 6.5,
    },
  ],
} as const;

export const DISCLAIMER_TEXT = {
  de: (
    <>
      Wir legen großen Wert auf höchste Qualität in allen Aspekten. Unser
      Fleisch beziehen wir ausschließlich von sorgfältig ausgewählten Züchtern
      und Höfen, die artgerechte und nachhaltige Haltungsformen praktizieren und
      uns schon seit vielen Jahren beliefern.
      <br />
      <br />
      Regionalität und Saisonalität gehen einher mit unserer Philosophie und so
      arbeiten wir Hand in Hand mit Resi am Markt und beziehen unser Gemüse
      direkt vom Viktualienmarkt.
    </>
  ),
  en: (
    <>
      We place great importance on using only top-quality products in all
      aspects. Our carefully chosen farms and breeders, who ensure a sustainable
      and animal-friendly raising, have been supplying us for many years.
      <br />
      <br />
      Regionality and seasonality are a great part of our philosophy, so we work
      hand in hand with 'Resi am Markt' and purchase our vegetables directly
      from the Viktualienmarkt.
    </>
  ),
} as const;
