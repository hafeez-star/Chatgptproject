import { useState } from "react";
import imageCompression from "browser-image-compression";

const ImageCompressor = () => {
  const [image, setImage] = useState(null);

  const compressImage = async (e) => {
    const file = e.target.files[0];

    const compressedFile = await imageCompression(file, {
      maxSizeMB: 1,
      maxWidthOrHeight: 1000,
    });

    setImage(URL.createObjectURL(compressedFile));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-10">
      <div className="bg-white p-10 rounded-3xl shadow text-center">
        <h1 className="text-4xl font-bold mb-6">Image Compressor</h1>

        <input type="file" onChange={compressImage} />

        {image && (
          <img
            src={image}
            alt="compressed"
            className="mt-6 rounded-2xl"
          />
        )}
      </div>
    </div>
  );
};

export default ImageCompressor;