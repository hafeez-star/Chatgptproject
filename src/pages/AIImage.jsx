import { useState } from "react";

const AIImage = () => {
  const [prompt, setPrompt] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-10">
      <div className="bg-white p-10 rounded-3xl shadow w-full max-w-xl">
        <h1 className="text-4xl font-bold mb-6">AI Image Generator</h1>

        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter image prompt"
          className="w-full border p-4 rounded-xl mb-4"
        />

        <button className="w-full bg-violet-600 text-white p-4 rounded-xl">
          Generate Image
        </button>
      </div>
    </div>
  );
};

export default AIImage;