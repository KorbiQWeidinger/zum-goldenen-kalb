import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function IgButton({ size }: { size: SizeProp }) {
  return (
    <a
      href="https://www.instagram.com/zumgoldenenkalb/"
      className="flex items-center justify-center hover:text-gold-500 transition-colors duration-300"
      aria-label="Instagram"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faInstagram} size={size} />
    </a>
  );
}
