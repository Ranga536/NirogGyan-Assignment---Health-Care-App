import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DoctorContext } from "../context/DoctorContext";

const LandingPage = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const { doctors } = useContext(DoctorContext);

  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(search.toLowerCase()) ||
      doctor.specialization.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-yellow-50 p-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 mt-2 text-pink-700">
          Meet Our Specialist Doctors
        </h1>

        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Search by name or specialization..."
            className="border border-pink-300 rounded-full px-4 py-2 w-full max-w-md shadow focus:outline-none focus:ring-2 focus:ring-pink-300"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {filteredDoctors.length > 0 ? (
          <div className="grid gap-6 justify-center grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
            {filteredDoctors.map((doctor) => (
              <div
                key={doctor.id}
                onClick={() => navigate(`/doctor/${doctor.id}`)}
                className="bg-white rounded-2xl shadow hover:shadow-lg cursor-pointer transform hover:-translate-y-1 transition duration-300 ease-in-out"
              >
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-800 mb-1">
                    {doctor.name}
                  </h2>
                  <p className="text-pink-600 font-medium mb-1">
                    {doctor.specialization}
                  </p>
                  <span
                    className={`inline-block text-xs px-2 py-1 rounded-full ${
                      doctor.status === "Available Today"
                        ? "bg-green-100 text-green-700"
                        : doctor.status === "Fully Booked"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {doctor.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 mt-8 text-lg">
            No doctors found matching your search.
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
