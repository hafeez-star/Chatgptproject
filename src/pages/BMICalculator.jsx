
import { useState } from "react";
import Navbar from "../components/Navbar";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");

  const calculateBMI = () => {
    const h = height / 100;
    const result = weight / (h * h);
    setBmi(result.toFixed(1));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="flex justify-center items-center p-10">
        <div className="bg-white p-10 rounded-3xl shadow w-full max-w-md">
          <h1 className="text-4xl font-bold mb-6">BMI Calculator</h1>

          <input
            type="number"
            placeholder="Weight KG"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full border p-4 rounded-xl mb-4"
          />

          <input
            type="number"
            placeholder="Height CM"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full border p-4 rounded-xl mb-4"
          />

          <button
            onClick={calculateBMI}
            className="w-full bg-violet-600 text-white p-4 rounded-xl"
          >
            Calculate
          </button>

          {bmi && (
            <h2 className="text-3xl font-bold text-center mt-6">
              BMI: {bmi}
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default BMICalculator;