import { Route, Routes } from "react-router-dom";
import { Home, Movies, Subscriptions, Support } from "./pages";

import { Navbar, Footer, MobileNavbar } from "./ui";

const App = () => {
  return (
    <div className="bg-[#1a1a1a9a]">
      <Navbar />
      <MobileNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/support" element={<Support />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
