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
import { OpeningHoursDialog } from "./components/OpeningHoursDialog";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";

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
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/reservations" element={<Reservations />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/impressum" element={<Impressum />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/dry-aging-cabinet" element={<DryAgingCabinet />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
            <OpeningHoursDialog />
          </Page>
        </ScrollToTop>
      </ParallaxProvider>
    </Router>
  );
}

export default App;
