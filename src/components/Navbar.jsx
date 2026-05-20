import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-violet-600 text-white p-5 flex justify-between items-center flex-wrap gap-4">

      <Link to="/" className="text-3xl font-bold">
        ToolHub
      </Link>

      <div className="flex gap-4 flex-wrap text-sm md:text-base">

        <Link to="/bmi">BMI</Link>
        <Link to="/age">Age</Link>
        <Link to="/password">Password</Link>
        <Link to="/qr">QR</Link>
        <Link to="/color">Color</Link>
        <Link to="/compress-image">Image</Link>
        <Link to="/pdf-tools">PDF</Link>
        <Link to="/ai-chat">AI Chat</Link>
        <Link to="/ai-image">AI Image</Link>
        <Link to="/login">Login</Link>

      </div>
    </div>
  );
};

export default Navbar;