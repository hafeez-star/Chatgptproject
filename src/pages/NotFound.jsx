import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">

      <h1 className="text-7xl font-bold mb-4">
        404
      </h1>

      <p className="text-2xl mb-6">
        Page Not Found
      </p>

      <Link
        to="/"
        className="bg-violet-600 text-white px-6 py-3 rounded-xl"
      >
        Go Home
      </Link>

    </div>
  );
};

export default NotFound;