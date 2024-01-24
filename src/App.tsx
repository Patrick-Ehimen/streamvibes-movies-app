import { Route, Routes } from "react-router-dom";
import { Home, Movies, Subscriptions, Support } from "./pages";

import { Navbar, Footer, MobileNavbar, MobileFooter } from "./ui";

const App = () => {
  return (
    <div>
      <Navbar />
      <MobileNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/support" element={<Support />} />
      </Routes>

      <Footer />
      <MobileFooter />
    </div>
  );
};

export default App;
