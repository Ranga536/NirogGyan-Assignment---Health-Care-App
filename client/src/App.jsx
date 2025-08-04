import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import DoctorProfile from "./pages/DoctorProfile"
import BookAppointment from "./pages/BookAppointment"
import Header from "./components/Header";
import Footer from "./components/Footer";
import { DoctorProvider } from "./context/DoctorContext";

function App() {

  return (
    <DoctorProvider>
      <Router>
        <Header />
          <main className="pt-16">   {/* Add top padding */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/doctor/:id" element={<DoctorProfile />} />
        <Route path="/book/:id" element={<BookAppointment/>} />
      </Routes>
      </main>
      <Footer />
     </Router>
    </DoctorProvider>
  )
}

export default App
