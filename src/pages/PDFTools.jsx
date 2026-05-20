import Navbar from "../components/Navbar";
import jsPDF from "jspdf";

const PDFTools = () => {

  const downloadPDF = () => {

    const doc = new jsPDF();

    doc.text("Hello Hafeez 😎", 20, 20);

    doc.save("toolhub.pdf");
  };

  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="flex justify-center items-center p-10">

        <div className="bg-white p-10 rounded-3xl shadow w-full max-w-md text-center">

          <h1 className="text-4xl font-bold mb-6">
            PDF Tools
          </h1>

          <button
            onClick={downloadPDF}
            className="bg-violet-600 text-white px-6 py-4 rounded-xl w-full"
          >
            Download PDF
          </button>

        </div>

      </div>

    </div>
  );
};

export default PDFTools;