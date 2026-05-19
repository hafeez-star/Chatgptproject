

import { Link } from "react-router-dom";

const ToolCard = ({ title, link }) => {
  return (
    <Link to={link}>
      <div className="bg-white rounded-3xl p-8 shadow hover:scale-105 duration-300 border">
        <h1 className="text-2xl font-bold text-center">{title}</h1>
      </div>AA
    </Link>
  );
};

export default ToolCard;