import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="p-10">

        <h1 className="text-5xl font-bold mb-5">
          Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-white p-8 rounded-3xl shadow">
            Total Users
          </div>

          <div className="bg-white p-8 rounded-3xl shadow">
            Total Tools
          </div>

          <div className="bg-white p-8 rounded-3xl shadow">
            Revenue
          </div>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;