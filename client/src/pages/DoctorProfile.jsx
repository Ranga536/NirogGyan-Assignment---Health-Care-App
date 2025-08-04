import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DoctorContext } from "../context/DoctorContext";

const DoctorProfile = () => {
  const { doctors } = useContext(DoctorContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    const found = doctors.find((d) => d.id === parseInt(id));
    if (found) {
      setDoctor(found);
    } else {
      fetch(`http://localhost:5000/api/doctors/${id}`)
        .then((res) => res.json())
        .then((data) => setDoctor(data))
        .catch((err) => console.error(err));
    }
  }, [id, doctors]);

  if (!doctor) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Loading doctor details...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
        {/* <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-64 object-cover"
        /> */}
        <div className="flex justify-center mt-6">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-50 h-50 object-cover rounded-full shadow-md"
          />
        </div>

        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {doctor.name}
          </h1>
          <p className="text-pink-600 font-medium mb-4">
            {doctor.specialization}
          </p>
          <p className="text-gray-700 mb-4">{doctor.details}</p>

          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Availability Schedule:
          </h2>
          {/* <ul className="mb-6">
            {doctor.schedule.map((slot, index) => (
              <li key={index} className="text-gray-600">
                {slot.day}: {slot.time}
              </li>
            ))}
          </ul> */}

          <ul className="mb-6">
            {doctor.schedule && doctor.schedule.length > 0 ? (
              doctor.schedule.map((slot, index) => (
                <li key={index} className="text-gray-600">
                  {slot.day}: {slot.time}
                </li>
              ))
            ) : (
              <li className="text-gray-500 italic">Not Available</li>
            )}
          </ul>

          {doctor.status === "Available Today" ? (
            <button
              onClick={() => navigate(`/book/${doctor.id}`)}
              className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-full shadow hover:shadow-lg transform hover:scale-105 transition duration-300"
            >
              Book Appointment
            </button>
          ) : (
            <button
              disabled
              className="w-full py-3 bg-gray-300 text-gray-500 font-semibold rounded-full cursor-not-allowed"
            >
              {doctor.status === "Fully Booked"
                ? "Fully Booked Today"
                : "On Leave Today"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
