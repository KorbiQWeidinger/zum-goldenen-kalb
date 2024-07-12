import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

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
      className="text-md font-medium text-white hover:text-gold-500 transition-all duration-300 lg:hover:border-t-4 hover:border-t-gold-500 md:hover:bg-white md:hover:bg-opacity-15 w-full lg:w-auto flex items-center justify-center h-24"
    >
      {label}
    </button>
  );
};

const useLockBodyScroll = (lock: boolean) => {
  useEffect(() => {
    if (lock) {
      // Get original body overflow
      const originalStyle = window.getComputedStyle(document.body).overflow;
      window.scrollTo(0, 0);
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [lock]); // Only re-run the effect if `lock` changes
};

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  useLockBodyScroll(mobileMenuOpen);

  return (
    <>
      {!mobileMenuOpen && (
        <header className="bg-black bg-opacity-60 text-white fixed top-0 left-0 right-0 z-50">
          <div className="mx-auto px-8 lg:px-16">
            <div className="flex justify-between items-center py-1 h-24">
              {/* Logo and hamburger menu */}
              <div className="flex justify-between lg:justify-start lg:flex-1 w-full">
                <a
                  href="/"
                  className="cursor-pointer"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  onClick={() => navigate("/")}
                >
                  <img
                    src={"/zum-goldenen-kalb/kalb-head-gold.png"}
                    className="h-20 transition-all duration-300"
                    alt="Logo"
                    style={{
                      filter: isHovered
                        ? "drop-shadow(0 0 3px #FFD700)"
                        : "none",
                    }}
                  />
                </a>
                <button className="lg:hidden" onClick={toggleMobileMenu}>
                  <FontAwesomeIcon
                    icon={faBars}
                    size="2xl"
                    className="hover:text-gold-500"
                  />
                </button>
              </div>

              {/* Desktop Buttons */}
              <div className="hidden lg:flex flex-1 justify-end space-x-6 items-stretch">
                <Button label="HOME" onClick={() => navigate("/")} />
                <Button label="ABOUT" />
                <Button label="MENU" />
                <Button
                  label="RESERVIERUNG"
                  onClick={() => navigate("/reservations")}
                />
                <SocialIcons />
              </div>
            </div>
          </div>
        </header>
      )}

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="inset-0 bg-black z-50 flex flex-col items-center justify-start pt-5 absolute m-h-screen">
          <button onClick={toggleMobileMenu} className="absolute top-8 right-8">
            <FontAwesomeIcon
              icon={faTimes}
              size="2xl"
              className="text-white hover:text-gold-500"
            />
          </button>
          <img
            src={"/zum-goldenen-kalb/kalb-head-gold.png"}
            className="h-32 my-10 transition-all duration-300"
            alt="Logo"
          />
          <Button
            label="HOME"
            onClick={() => {
              navigate("/");
              toggleMobileMenu();
            }}
          />
          <Button label="ABOUT" onClick={toggleMobileMenu} />
          <Button label="MENU" onClick={toggleMobileMenu} />
          <Button
            label="RESERVIERUNG"
            onClick={() => {
              navigate("/reservations");
              toggleMobileMenu();
            }}
          />
          <SocialIconsMobile />
        </div>
      )}
    </>
  );
};

const SocialIcons = () => (
  <>
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
  </>
);

const SocialIconsMobile = () => (
  <div className="flex w-full justify-center space-x-10 mt-8 mb-6 text-white">
    <a
      href="https://www.instagram.com/zumgoldenenkalb/"
      className="flex items-center justify-center hover:text-gold-500 transition-colors duration-300"
      aria-label="Instagram"
    >
      <FontAwesomeIcon icon={faInstagram} size="2x" />
    </a>
    <a
      href="https://www.facebook.com/zum.goldenen.kalb/"
      className="flex items-center justify-center hover:text-gold-500 transition-colors duration-300"
      aria-label="Facebook"
    >
      <FontAwesomeIcon icon={faFacebookF} size="2x" />
    </a>
  </div>
);

export default Header;
