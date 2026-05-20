
import jsPDF from "jspdf";

const downloadPDF = () => {
  const doc = new jsPDF();

  doc.text("Hello Hafeez 😎", 20, 20);

  doc.save("file.pdf");
};