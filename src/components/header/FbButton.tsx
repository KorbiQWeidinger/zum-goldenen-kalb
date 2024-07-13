import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const FbButton = ({ size }: { size: SizeProp }) => {
  return (
    <a
      href="https://www.facebook.com/zum.goldenen.kalb/"
      className="flex items-center justify-center hover:text-gold-500 transition-colors duration-300"
      aria-label="Facebook"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faFacebookF} size={size} />
    </a>
  );
};
