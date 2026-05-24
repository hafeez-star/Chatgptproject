import Navbar from "../components/Navbar";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-10">
        <div className="bg-white rounded-3xl shadow p-10 max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-5">Profile</h1>
          <p className="text-lg text-gray-600">
            Welcome to your profile page. This area can be expanded with user settings, account details, and activity logs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
