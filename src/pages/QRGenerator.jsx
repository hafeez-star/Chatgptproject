

import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import Navbar from "../components/Navbar";

const QRGenerator = () => {
  const [text, setText] = useState("");

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="flex justify-center items-center p-10">
        <div className="bg-white p-10 rounded-3xl shadow w-full max-w-md text-center">
          <h1 className="text-4xl font-bold mb-6">QR Generator</h1>

          <input
            type="text"
            placeholder="Enter text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full border p-4 rounded-xl mb-6"
          />

          {text && <QRCodeCanvas value={text} size={200} />}
        </div>
      </div>
    </div>
  );
};

export default QRGenerator;