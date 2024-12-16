import { useLocation, useNavigate } from "react-router-dom";

const AdminPenggunaDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state;

  if (!user) {
    return (
      <div className="p-4">
        <h1>User not found</h1>
        <button
          onClick={() => navigate("/admin/pengguna")}
          className="bg-blue-500 text-white px-3 py-1 rounded mt-4"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center gap-4 mb-6">
          <img
            src={user.image_profile}
            alt={user.name}
            className="w-24 h-24 rounded-full object-cover"
          />
          <div>
            <h1 className="text-2xl font-bold">{user.name}</h1>
            <p className="text-gray-500">{user.email}</p>
            <p className="text-sm text-gray-400">{user.role}</p>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold">Location</h2>
            <p className="text-gray-600">{user.location}</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Company</h2>
            <p className="text-gray-600">{user.company}</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Job</h2>
            <p className="text-gray-600">{user.pekerjaan}</p>
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          <button
            onClick={() => navigate("/admin/pengguna")}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Back to List
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminPenggunaDetail;
