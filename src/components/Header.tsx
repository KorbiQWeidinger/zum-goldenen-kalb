import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="bg-black bg-opacity-60 text-white fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto px-16">
        <div className="flex justify-between items-center py-1 h-24">
          <div className="flex justify-start lg:flex-1">
            <a
              href="/"
              className="flex justify-start lg:flex-1 cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => navigate("/")}
            >
              <img
                src={"/zum-goldenen-kalb/kalb-head-gold.png"}
                className="h-20 transition-all duration-300"
                alt="Vite logo"
                style={{
                  filter: isHovered ? "drop-shadow(0 0 3px #FFD700)" : "none",
                }}
              />
            </a>
          </div>

          {/* Buttons on the right with hover effect */}
          <div className="flex-1 flex justify-end space-x-6 items-stretch">
            <Button label="HOME" onClick={() => navigate("/")} />
            <Button label="ABOUT" />
            <Button label="MENU" />
            <Button
              label="RESERVIERUNG"
              onClick={() => navigate("/reservations")}
            />
            {/* Social Media Icons */}
            <a
              href="https://www.instagram.com/zumgoldenenkalb/"
              className="pl-8 w-8 flex items-center justify-center h-24 hover:text-gold-500 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faInstagram} size="xl" />
            </a>
            <a
              href="https://www.facebook.com/zum.goldenen.kalb/"
              className="flex w-8 items-center justify-center h-24 hover:text-gold-500 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faFacebookF} size="xl" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

const Button = ({
  label,
  onClick,
}: {
  label: string;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="text-md font-medium text-white hover:text-gold-500 transition-all duration-300 hover:border-t-4 hover:border-t-gold-500 flex items-center justify-center h-24"
    >
      {label}
    </button>
  );
};

export default Header;
