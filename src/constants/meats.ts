export interface MeatInfo {
  id: number;
  name: string;
  image: string;
  cow_image?: string;
  position: { top: string; left: string };
  orientation: "left" | "right";
  en: {
    description: string;
  };
  de: {
    description: string;
  };
}

export const meats: MeatInfo[] = [
  {
    id: 1,
    name: "Black Angus Filet",
    image: "/meats/Black_Angus_Filet.png",
    position: { top: "34%", left: "71%" },
    orientation: "right",
    de: {
      description:
        "Das Black Angus Filet ist das zarteste Stück des Rindes mit einer feinen, geschmeidigen Textur und wenig intramuskulärem Fett, was es ideal für gesundheitsbewusste Genießer macht. Es eignet sich perfekt zum Grillen und bietet einen intensiven, kräftigen Geschmack, der sich durch hohe Qualität auszeichnet. Die Fütterung mit Gras und Getreide sorgt für aromatische Nuancen und eine hervorragende Saftigkeit, die durch die optimale Marmorierung unterstützt wird.",
    },
    en: {
      description:
        "The Black Angus Filet is the most tender piece of beef with a fine, delicate texture and little intramuscular fat, making it ideal for health-conscious eaters. It is perfectly suited for grilling and offers an intense, robust flavor that stands out for its high quality. The feeding on grass and grain provides aromatic nuances and an excellent juiciness, supported by optimal marbling.",
    },
  },
  {
    id: 2,
    name: "Hereford Tomahawk",
    image: "/meats/Hereford_Tomahawk.png",
    cow_image: "/meats/Hereford_Cow.png",
    position: { top: "44%", left: "24%" },
    orientation: "right",
    en: {
      description:
        "The Hereford Tomahawk is distinguished by its impressive size and thickness, presenting itself with a long bone in the characteristic tomahawk shape. The pronounced marbling of the meat ensures excellent juiciness and an intense, robust flavor. These qualities make the tomahawk tender and perfectly suited for grilling.",
    },
    de: {
      description:
        "Das Hereford Tomahawk zeichnet sich durch seine beeindruckende Größe und Dicke aus und präsentiert sich mit einem langen Knochen in der charakteristischen Tomahawk-Form. Die ausgeprägte Marmorierung des Fleisches sorgt für eine hervorragende Saftigkeit und einen intensiven, kräftigen Geschmack. Diese Eigenschaften machen das Tomahawk zart und perfekt geeignet zum Grillen.",
    },
  },
  {
    id: 3,
    name: "Jan Bull Bone Ribeye",
    image: "/meats/Jan_Bull_Bone_Ribeye.png",
    position: { top: "42%", left: "81%" },
    orientation: "right",
    de: {
      description:
        "Das Bone Ribeye von Jan Bull überzeugt durch seine beeindruckende Erscheinung mit einem langen Knochen und einer charakteristischen Form, die das Steak optisch ansprechend macht. Die hohe Marmorierung sorgt für außergewöhnliche Saftigkeit und reichhaltigen Geschmack, während das intramuskuläre Fett beim Garen schmilzt und für ein unvergessliches Aroma sorgt. Im Geschmacksprofil bietet das Bone Ribeye einen vollmundigen und kräftigen Geschmack, der durch die artgerechte Fütterung der Rinder verstärkt wird. Natürliche Aromen aus hochwertigem Futter kommen beim Kochen zur Geltung und machen jedes Stück zu einem besonderen Genusserlebnis.",
    },
    en: {
      description:
        "The Bone Ribeye of Jan Bull impresses with its impressive appearance with a long bone and a characteristic shape that makes the steak visually appealing. The high marbling ensures excellent juiciness and an intense, robust flavor, while the intramuscular fat melts during cooking and ensures a unforgettable aroma. In the flavor profile, the Bone Ribeye offers a full-bodied and robust flavor that is enhanced by the proper feeding of the cattle. Natural aromas come to life during cooking and make each piece a special gastronomic experience.",
    },
  },
  {
    id: 4,
    name: "Taurus Ribeye",
    image: "/meats/Taurus_Ribeye.png",
    position: { top: "70%", left: "78%" },
    orientation: "right",
    de: {
      description:
        "Das Taurus Ribeye besticht durch seine feine Marmorierung, die für außergewöhnliche Saftigkeit und Zartheit sorgt. Der kräftige, vollmundige Geschmack und die saftige Textur machen es ideal für Grillen oder Braten – ein Genuss für Liebhaber hochwertiger Steaks.",
    },
    en: {
      description:
        "The Taurus Ribeye stands out for its fine marbling, which ensures excellent juiciness and tenderness. The intense, full-bodied flavor and the juicy texture make it ideal for grilling or roasting – a pleasure for steak lovers.",
    },
  },
  {
    id: 5,
    name: "Alte Kuh Ribeye",
    image: "/meats/Alte_Kuh_Ribeye.png",
    position: { top: "68%", left: "70%" },
    orientation: "right",
    de: {
      description:
        "Das Fleisch der Alten Kuh zeichnet sich durch seine langjährige Reifung, tiefe Marmorierung und intensiven, nussigen Geschmack aus. Die Kombination aus fester Textur und saftiger Marmorierung macht es zu einem außergewöhnlichen Genuss für Fleischliebhaber.",
    },
    en: {
      description:
        "The meat of the Old Cow is characterized by its long aging, deep marbling, and intense, nutty flavor. The combination of firm texture and juicy marbling makes it a unique pleasure for meat lovers.",
    },
  },
  {
    id: 6,
    name: "Emsländer Filet",
    image: "/meats/Emslander_Filet.png",
    position: { top: "33%", left: "58%" },
    orientation: "right",
    de: {
      description:
        "Das Emsländer Filet besticht durch seine außergewöhnliche Zartheit und butterweiche Konsistenz. Es hat einen milden, leicht nussigen Geschmack, der an Schinken erinnert, und bietet ein zartes, saftiges Geschmackserlebnis. Ideal für Genießer, die zartes Fleisch mit aromatischen Nuancen schätzen.",
    },
    en: {
      description:
        "The Emsländer Filet stands out for its exceptional tenderness and buttery consistency. It has a mild, slightly nutty flavor reminiscent of ham and offers a delicate, juicy gastronomic experience. Ideal for connoisseurs who appreciate tender meat with aromatic nuances.",
    },
  },
  {
    id: 7,
    name: "Wagyu Australien Kiwame Ribeye",
    image: "/meats/Wagyu_Australien_Kiwame_Ribeye.png",
    position: { top: "49%", left: "59%" },
    orientation: "right",
    de: {
      description:
        "Das Wagyu Australien Kiwame Ribeye ist ein außergewöhnliches Steak, das durch seine intensive Marmorierung und die Verwendung von Kiwame-Rindern gekennzeichnet ist. Es hat einen intensiven, kräftigen Geschmack und eine feine, geschmeidige Textur, die es ideal für Grillen oder Braten macht.",
    },
    en: {
      description:
        "The Wagyu Australien Kiwame Ribeye is an exceptional steak characterized by its intensive marbling and the use of Kiwame cattle. It has an intense, robust flavor and a fine, delicate texture, making it ideal for grilling or roasting.",
    },
  },
];
