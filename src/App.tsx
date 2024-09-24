import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage, Tournaments } from "./pages/pagesExport";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { Footer, Navbar } from "./components/componentsExport";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div
        className="window"
        style={{
          minHeight: "calc(100vh - 75px - 60px)",
          overflowY: "auto",
          backgroundColor: "#F7F7F7",
        }}
      >
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/zawody" element={<Tournaments />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
