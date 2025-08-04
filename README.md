## 📌 **NirogGyan Healthcare Appointment Booking App**

A responsive, modern web application to browse doctors, view their availability, and easily book healthcare appointments.  
Built with **React + Vite**, **Tailwind CSS**, and a simple **Node.js/Express** backend.

---

### ✨ **Features**

- 🔍 **Landing Page:** View doctors by specialization, availability, and search by name/specialization.
- 📄 **Doctor Profile Page:** Detailed view including availability schedule and doctor bio.
- 📅 **Book Appointment:** Quick form for booking appointments, with confirmation.
- 📱 **Responsive Design:** Works seamlessly on mobile, tablet, and desktop.
- ⚙ **Context API:** Global state management for doctors data and appointments.
- 🖌 **Modern UI:** Clean, soft gradient backgrounds and card design using Tailwind CSS.
- ✅ **Basic Node.js backend:** Mock REST API to serve doctor data.

---

### 🛠 **Tech Stack**

| Frontend           | Backend        | Styling      |
| ------------------ | -------------- | ------------ |
| React (with Vite)  | Node.js, Express | Tailwind CSS |

Other tools/libraries:

- React Router DOM
- React Hooks (`useState`, `useEffect`, `useContext`)

---

### 🚀 **Getting Started**

✅ **Clone the repo**

```bash
git clone https://github.com/Ranga536/NirogGyan-Assignment---Health-Care-App.git

```

---

📦 **Install dependencies**

**Frontend:**

```bash
cd client
npm install
```

**Backend:**

```bash
cd server
npm install
```

---

▶ **Run the app**

In separate terminals:

**Backend:**

```bash
cd server
npm run dev
```

**Frontend:**

```bash
cd client
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

### 📚 **Project Structure**

```
root/
 ├─ client/          # React + Vite app
 │  ├─ src/
 │  │  ├─ components/  # Header, Footer, etc.
 │  │  ├─ context/     # DoctorContext.js
 │  │  ├─ pages/       # LandingPage, DoctorProfile, BookAppointment
 │  │  └─ App.jsx
 │  └─ index.html
 └─ server/          # Node.js + Express server         
    └─ server.js
```

---

### ✅ **Implemented Functionality**

- Landing page shows list of doctors with search
- Doctor profile shows details, schedule, and book button
- Disable booking if doctor is “Fully Booked” or “On Leave”
- Booking form collects patient name, email, date/time
- Responsive header & footer
- Shows "No doctors found" if search has no matches
- Shows "Not Available" if doctor has empty schedule

---


---

### 🧩 **Challenges & Solutions**

| Challenge                                   | Solution                                              |
| ------------------------------------------- | ----------------------------------------------------- |
| Displaying correct availability & disabling booking | Used condition checks based on doctor status |
| State sharing across pages                  | Used React Context API                                 |
| Keeping UI responsive and modern            | Used Tailwind CSS utility classes & gradients         |
| Node backend serving data                   | Created simple REST API with Express                  |

---



---

### 📄 **License**

This project is open source and available under the MIT License.

