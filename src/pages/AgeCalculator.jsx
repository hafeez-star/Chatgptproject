
import { useState } from "react";
import Navbar from "../components/Navbar";

const AgeCalculator = () => {
  const [date, setDate] = useState("");
  const [age, setAge] = useState("");

  const calculateAge = () => {
    const birth = new Date(date);
    const today = new Date();

    let years = today.getFullYear() - birth.getFullYear();

    setAge(years);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="flex justify-center items-center p-10">
        <div className="bg-white p-10 rounded-3xl shadow w-full max-w-md">
          <h1 className="text-4xl font-bold mb-6">Age Calculator</h1>

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border p-4 rounded-xl mb-4"
          />

          <button
            onClick={calculateAge}
            className="w-full bg-violet-600 text-white p-4 rounded-xl"
          >
            Calculate Age
          </button>

          {age && (
            <h2 className="text-3xl font-bold text-center mt-6">
              Your Age: {age}
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default AgeCalculator;