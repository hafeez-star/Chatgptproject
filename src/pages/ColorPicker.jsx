
import { useState } from "react";
import Navbar from "../components/Navbar";

const ColorPicker = () => {
  const [color, setColor] = useState("#8b5cf6");

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="flex justify-center items-center p-10">
        <div className="bg-white p-10 rounded-3xl shadow w-full max-w-md text-center">
          <h1 className="text-4xl font-bold mb-6">Color Picker</h1>

          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-40 h-40 border-none"
          />

          <div
            className="w-full h-32 rounded-2xl mt-6"
            style={{ background: color }}
          ></div>

          <h2 className="text-2xl font-bold mt-4">{color}</h2>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;