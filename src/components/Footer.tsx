import { useNavigate } from "react-router-dom";
import { Fire } from "./fire/Fire";

export function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-black text-gold-500 py-8 px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Address */}
        <div className="text-sm text-center order-2 md:order-1 mt-4 md:mt-0">
          <a
            href="https://maps.app.goo.gl/bn9MtXP8JN7Sr48K9"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer" // Good practice for security reasons when using target="_blank"
          >
            <p className="mb-0.5 md:mb-1">UTZSCHNEIDERSTRASSE 1</p>
            <p className="mb-4 md:mb-1">80469 MÜNCHEN</p>
          </a>
          <p className="mb-0.5 md:mb-1">
            Tel.: <a href="tel:+498923542290">+49 (0)/89 23 54 22 90</a>
          </p>
        </div>

        {/* Copyright */}
        <div className="text-xs text-center order-3 md:order-2 mt-4 md:mt-0">
          © 2024 Zum Goldenen Kalb |{" "}
          <a
            className="hover:underline hover:cursor-pointer"
            onClick={() => navigate("/impressum")}
          >
            Impressum
          </a>
          <p className="md:mt-2">
            <a
              href="https://korbiqweidinger.github.io/"
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer" // Good practice for security reasons when using target="_blank"
            >
              Created with ♡ by Korbi
            </a>
          </p>
        </div>

        {/* Opening Hours */}
        <div className="text-sm text-center order-1 md:order-3">
          <p className="mb-0.5 md:mb-1">ÖFFNUNGSZEITEN:</p>
          <p className="mb-0.5 md:mb-1">DI – FR: 17:00 – 01:00 Uhr</p>
          <p>SA: 12:00 – 01:00 Uhr</p>
        </div>
      </div>
    </footer>
  );
}

export function FooterWithFire() {
  const array = Array.from({ length: 20 }, (_, index) => index);

  return (
    <div className="relative pb-72 md:pb-40">
      <div className="relative w-full h-32 z-0 -ml-36">
        {array.map((_, index) => (
          <div
            className="absolute top-0 left-0"
            style={{ transform: `translateX(${index * 120}px)` }}
          >
            <Fire />
          </div>
        ))}
      </div>
      <div className="absolute top-36 left-0 w-full z-10">
        <Footer />
      </div>
    </div>
  );
}
