import { useState } from "react";
import { useParams } from "react-router-dom";

const BookAppointment = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    patientName: "",
    email: "",
    dateTime: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, doctorId: id }),
      });
      const data = await res.json();
      setSuccessMessage(data.message);
      setFormData({ patientName: "", email: "", dateTime: "" });
    } catch (err) {
      console.error("Error booking appointment:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-pink-700">
          Book Appointment
        </h1>

        {successMessage && (
          <div className="mb-4 text-green-700 bg-green-100 px-4 py-2 rounded">
            {successMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="patientName"
            placeholder="Patient Name"
            value={formData.patientName}
            onChange={handleChange}
            className="w-full border border-pink-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-pink-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
            required
          />

          <input
            type="datetime-local"
            name="dateTime"
            value={formData.dateTime}
            onChange={handleChange}
            className="w-full border border-pink-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
            required
          />

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-full shadow hover:shadow-lg transform hover:scale-105 transition duration-300"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookAppointment;
