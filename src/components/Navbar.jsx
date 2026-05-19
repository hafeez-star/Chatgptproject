

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-violet-600 text-white p-5 flex justify-between items-center">
      <Link to="/" className="text-3xl font-bold">
        ToolHub
      </Link>

      <div className="flex gap-5 text-lg">
        <Link to="/bmi">BMI</Link>
        <Link to="/age">Age</Link>
        <Link to="/password">Password</Link>
        <Link to="/qr">QR</Link>
        <Link to="/color">Color</Link>
      </div>
    </div>
  );
};

export default Navbar;