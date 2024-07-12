export function Footer() {
  return (
    <footer className="bg-gold-500 text-black py-8 px-16">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Address */}
        <div className="text-sm text-center">
          <p className="mb-1">UTZSCHNEIDERSTRASSE 1</p>
          <p className="mb-1">80469 MÜNCHEN</p>
          <p className="mb-1">TEL: +49 (0)89/23 54 22 90</p>
        </div>

        {/* Copyright */}
        <div className="text-xs">
          © 2018 Zum Goldenen Kalb |{" "}
          <a href="/impressum" className="hover:underline">
            Impressum
          </a>
        </div>

        {/* Opening Hours */}
        <div className="text-sm text-center">
          <p className="mb-1">ÖFFNUNGSZEITEN:</p>
          <p>DI – SA: 17:00 – 01:00 Uhr</p>
        </div>
      </div>
    </footer>
  );
}
