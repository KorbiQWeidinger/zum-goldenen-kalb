import { Main } from "./pages/Main";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Reservations } from "./pages/Reservations";
import { ScrollToTop } from "./components/ScrollToTop";
import { Impressum } from "./pages/Impressum";
import { Menu } from "./pages/Menu";
import { ParallaxProvider } from "react-scroll-parallax";
import { PropsWithChildren } from "react";
import Header from "./components/header/Header";
import { Footer } from "./components/Footer";
import { AboutUs } from "./pages/AboutUs";
import DryAgingCabinet from "./pages/DryAgingCabinet";
import GoogleAnalytics from "./components/GoogleAnalytics";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { useTranslation } from "react-i18next";

function Banner() {
  const { i18n } = useTranslation();

  if (i18n.language === "en") {
    return (
      <div className="bg-gold-500 text-white text-center py-2 fixed top-0 left-0 right-0 z-50 h-[40px]">
        We are open on Monday, January 13th!
      </div>
    );
  }

  return (
    <div className="bg-gold-500 text-white text-center py-2 fixed top-0 left-0 right-0 z-50 h-[40px]">
      Wir sind am Montag, dem 13. Januar geöffnet!
    </div>
  );
}

function Page({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <GoogleAnalytics />
      <ParallaxProvider>
        <ScrollToTop>
          <Page>
            <Banner />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/reservations" element={<Reservations />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/impressum" element={<Impressum />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/dry-aging-cabinet" element={<DryAgingCabinet />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
          </Page>
        </ScrollToTop>
      </ParallaxProvider>
    </Router>
  );
}

export default App;
