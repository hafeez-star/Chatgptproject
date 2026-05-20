import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import BMICalculator from "./pages/BMICalculator";
import AgeCalculator from "./pages/AgeCalculator";
import PasswordGenerator from "./pages/PasswordGenerator";
import QRGenerator from "./pages/QRGenerator";
import ColorPicker from "./pages/ColorPicker";
import ImageCompressor from "./pages/ImageCompressor";
import PDFTools from "./pages/PDFTools";
import AIChat from "./pages/AIChat";
import AIImage from "./pages/AIImage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Main Pages */}
        <Route path="/" element={<Home />} />

        {/* Tools */}
        <Route path="/bmi" element={<BMICalculator />} />
        <Route path="/age" element={<AgeCalculator />} />
        <Route path="/password" element={<PasswordGenerator />} />
        <Route path="/qr" element={<QRGenerator />} />
        <Route path="/color" element={<ColorPicker />} />
        <Route path="/compress-image" element={<ImageCompressor />} />
        <Route path="/pdf-tools" element={<PDFTools />} />
        <Route path="/ai-chat" element={<AIChat />} />
        <Route path="/ai-image" element={<AIImage />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* User */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;