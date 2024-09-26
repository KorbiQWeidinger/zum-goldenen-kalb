export interface MeatInfo {
  id: number;
  name: string;
  description: string;
  image: string;
  position: { top: string; left: string };
  orientation: "left" | "right";
}

export const meats: MeatInfo[] = [
  {
    id: 1,
    name: "Black Angus Filet",
    description: "A tender and flavorful cut from the tenderloin of the beef.",
    image: "/meats/Black_Angus_Filet.png",
    position: { top: "70%", left: "50%" },
    orientation: "right",
  },
  {
    id: 2,
    name: "Hereford Tomahawk",
    description:
      "A lean and flavorful cut from the rear back portion of the cattle.",
    image: "/meats/Hereford_Tomahawk.png",
    position: { top: "45%", left: "20%" },
    orientation: "right",
  },
  {
    id: 3,
    name: "Jan Bull Bone Ribeye",
    description: "A flavorful, tender cut from the rib section.",
    image: "/meats/Jan_Bull_Bone_Ribeye.png",
    position: { top: "60%", left: "20%" },
    orientation: "right",
  },
  {
    id: 4,
    name: "Taurus Ribeye",
    description: "A classic cut featuring both tenderloin and strip steak.",
    image: "/meats/Taurus_Ribeye.png",
    position: { top: "73%", left: "45%" },
    orientation: "right",
  },
];
