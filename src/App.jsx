import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import BMICalculator from "./pages/BMICalculator";
import AgeCalculator from "./pages/AgeCalculator";
import PasswordGenerator from "./pages/PasswordGenerator";
import QRGenerator from "./pages/QRGenerator";
import ColorPicker from "./pages/ColorPicker";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bmi" element={<BMICalculator />} />
        <Route path="/age" element={<AgeCalculator />} />
        <Route path="/password" element={<PasswordGenerator />} />
        <Route path="/qr" element={<QRGenerator />} />
        <Route path="/color" element={<ColorPicker />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;