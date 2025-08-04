const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Mock doctor data
const doctors = [
  {
    id: 1,
    name: 'Dr. Priya Sharma',
    specialization: 'Cardiologist',
    image: 'https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=926&fit=clip',
    status: 'Available Today',
    details: 'Over 12 years diagnosing and treating complex heart conditions.\nExpert in angioplasty and non-invasive cardiac care.\nCommitted to lifestyle counseling for heart disease prevention.',
    schedule: [{ day: 'Mon', time: '10am - 4pm' }]
  },
  {
    id: 2,
    name: 'Dr. Prajwal Kumar',
    specialization: 'Dermatologist',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small_2x/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg',
    status: 'On Leave Today',
    details: 'Specialist in acne, pigmentation, and laser treatments.\nOver 500 successful cosmetic procedures performed.\nAdvocates for personalized skincare and natural results',
    schedule: []
  },
   {
    id: 3,
    name: 'Dr. Anita Desai',
    specialization: 'Neurologist',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/028/287/555/small/an-indian-young-female-doctor-isolated-on-green-ai-generated-photo.jpg',
    status: 'On Leave',
    details: '15 years treating migraines, epilepsy, and neurodegenerative disorders.\nLed research on stroke rehabilitation.\nRenowned for her patient-friendly counseling and accurate diagnosis.',
    schedule: []
  },
  {
    id: 4,
    name: 'Dr. Kiran Patel',
    specialization: 'Orthopedic Surgeon',
    image: 'https://t3.ftcdn.net/jpg/02/95/51/80/360_F_295518052_aO5d9CqRhPnjlNDTRDjKLZHNftqfsxzI.jpg',
    status: 'Available Today',
    details: 'Over 11 years specializing in joint replacement surgeries.\nPerformed 300+ knee and hip replacements.\nDedicated to post-surgery care and patient mobility improvement.',
    schedule: [{ day: 'Thu', time: '11am - 5pm' }]
  },
  {
    id: 5,
    name: 'Dr. Priya Shukla',
    specialization: 'Gynecologist',
    image: 'http://static.vecteezy.com/system/resources/thumbnails/048/628/628/small/female-doctor-with-a-gentle-smile-demonstrating-warmth-and-professionalism-background-free-photo.jpg',
    status: 'Available Today',
    details: '9 years of experience in women’s health and prenatal care.\nHandled over 200 safe deliveries and complex gynecological surgeries.\nAdvocate for womens wellness and awareness.',
    schedule: [{ day: 'Fri', time: '10am - 3pm' }]
  },
  {
    id: 6,
    name: 'Dr. Sameer Verma',
    specialization: 'Pediatrician',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/028/287/384/small/a-mature-indian-male-doctor-on-a-white-background-ai-generated-photo.jpg',
    status: 'Fully Booked',
    details: '8 years dedicated to child health and vaccination programs.\nExpert in pediatric nutrition and chronic illness management.\nKnown for his friendly approach to kids and parents alike.',
    schedule: []
  },
  {
    id: 7,
    name: 'Dr. Neha Agarwal',
    specialization: 'ENT Specialist',
    image: 'https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg',
    status: 'Available Today',
    details: '10 years experience treating sinusitis, hearing loss, and allergies.\nPerformed 150+ endoscopic sinus surgeries.\nFocused on minimally invasive procedures and patient comfort.',
    schedule: [{ day: 'Tue', time: '9am - 1pm' }]
  },
  {
    id: 8,
    name: 'Dr. Amit Joshi',
    specialization: 'General Physician',
    image: 'https://img.freepik.com/premium-photo/studio-shot-young-handsome-indian-man-doctor-against-gray_251136-12627.jpg',
    status: 'Available Today',
    details: '12 years managing common illnesses and chronic diseases.\nTrusted family physician for hundreds of patients.\nFocuses on preventive care and healthy lifestyle counseling.',
    schedule: [{ day: 'Wed', time: '10am - 4pm' }]
  },
  {
    id: 9,
    name: 'Dr. Meera Iyer',
    specialization: 'Ophthalmologist',
    image: 'https://img.freepik.com/premium-photo/confident-female-doctor-with-stethoscope-arms-crossed_116547-80690.jpg?semt=ais_hybrid&w=740',
    status: 'Fully Booked',
    details: '7 years in treating cataracts, glaucoma, and vision correction.\nPerformed 100+ cataract surgeries with high success rate.\nAdvocate for regular eye checkups and vision health.',
    schedule: []
  },
  {
    id: 10,
    name: 'Dr. Arjun Singh',
    specialization: 'Dentist',
    image: 'https://t4.ftcdn.net/jpg/07/07/89/33/360_F_707893394_5DEhlBjWOmse1nyu0rC9T7ZRvsAFDkYC.jpg',
    status: 'Available Today',
    details: '6 years of experience in cosmetic dentistry and root canal treatments.\nCompleted over 500 dental procedures.\nFocused on painless treatment and patient education.',
    schedule: [{ day: 'Fri', time: '11am - 4pm' }]
  }
];

// Routes

//Get all doctors 
app.get('/api/doctors', (req, res) => {
    res.json(doctors);
})

// Get doctor by ID
app.get('/api/doctors/:id', (req, res) => {
    const doctorId = parseInt(req.params.id);

    const doctor = doctors.find(doc => doc.id === doctorId);

    res.json(doctor || {});
})

// Book appointment (mock)
app.post('/api/appointments', (req, res) => {
  // console.log(req.body); // { patientName, email, dateTime }
  res.json({ message: 'Appointment booked successfully!' });
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})