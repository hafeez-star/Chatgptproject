


import { useState } from "react";
import Navbar from "../components/Navbar";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";

    let result = "";

    for (let i = 0; i < 12; i++) {
      result += chars.charAt(
        Math.floor(Math.random() * chars.length)
      );
    }

    setPassword(result);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="flex justify-center items-center p-10">
        <div className="bg-white p-10 rounded-3xl shadow w-full max-w-md">
          <h1 className="text-4xl font-bold mb-6">
            Password Generator
          </h1>

          <button
            onClick={generatePassword}
            className="w-full bg-violet-600 text-white p-4 rounded-xl"
          >
            Generate Password
          </button>

          {password && (
            <div className="mt-6 bg-gray-100 p-4 rounded-xl text-center text-xl break-all">
              {password}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;