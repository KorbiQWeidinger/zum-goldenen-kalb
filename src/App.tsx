import { Main } from "./pages/Main";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Reservations } from "./pages/Reservations";
import { ScrollToTop } from "./components/ScrollToTop";
import { Impressum } from "./pages/Impressum";
import { Menu } from "./pages/Menu";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <Router>
      <ParallaxProvider>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/impressum" element={<Impressum />} />
          </Routes>
        </ScrollToTop>
      </ParallaxProvider>
    </Router>
  );
}

export default App;
