import { Main } from "./pages/Main";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Reservations } from "./pages/Reservations";
import { ScrollToTop } from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/reservations" element={<Reservations />} />
        </Routes>
      </ScrollToTop>
    </Router>
  );
}

export default App;
