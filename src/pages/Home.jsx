
import Navbar from "../components/Navbar";
import ToolCard from "../components/ToolCard";

const tools = [
  {
    title: "BMI Calculator",
    link: "/bmi",
  },
  {
    title: "Age Calculator",
    link: "/age",
  },
  {
    title: "Password Generator",
    link: "/password",
  },
  {
    title: "QR Generator",
    link: "/qr",
  },
  {
    title: "Color Picker",
    link: "/color",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="p-10">
        <h1 className="text-5xl font-bold text-center mb-10">
          Free Online Tools
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <ToolCard
              key={index}
              title={tool.title}
              link={tool.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;