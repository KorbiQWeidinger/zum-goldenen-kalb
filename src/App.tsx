import { Main } from "./pages/Main";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Reservations } from "./pages/Reservations";
import { ScrollToTop } from "./components/ScrollToTop";
import { Impressum } from "./pages/Impressum";
import { Menu } from "./pages/Menu";
import { ParallaxProvider } from "react-scroll-parallax";
import DryAgingCabinet from "./pages/DryAgingCabinet";
import GoogleAnalytics from "./components/GoogleAnalytics";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { Page } from "./components/layout/Page";
import { OpeningHours } from "./pages/OpeningHours";
import { AGB } from "./pages/AGB";

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
              <Route path="/opening-hours" element={<OpeningHours />} />
              <Route path="/dry-aging-cabinet" element={<DryAgingCabinet />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/agb" element={<AGB />} />
            </Routes>
          </Page>
        </ScrollToTop>
      </ParallaxProvider>
    </Router>
  );
}

export default App;
