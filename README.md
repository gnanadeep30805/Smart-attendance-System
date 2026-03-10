# Smart Attendance System

A **location-based attendance management system** built using the **MERN stack** that allows students to mark attendance only when they are physically present inside the classroom area. The system uses **geolocation verification** to ensure accurate attendance tracking and prevent proxy attendance.

---

# Features

* Location-based attendance using **latitude and longitude**
* Classroom **geofencing verification**
* Secure **student authentication**
* Attendance marking and history tracking
* Admin dashboard for monitoring attendance
* Responsive user interface

---

# Tech Stack

### Frontend

* React.js
* Tailwind CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB

### APIs

* Browser Geolocation API

---

# Project Structure

```
smart-attendance-system
│
├── frontend
│   ├── src
│   ├── components
│   ├── pages
│   └── App.js
│
├── backend
│   ├── routes
│   ├── controllers
│   ├── models
│   └── server.js
│
└── README.md
```

---

# How It Works

1. Student logs into the system.
2. The browser captures the **current GPS location**.
3. The backend compares the student's location with the **classroom coordinates**.
4. If the student is within the allowed radius, attendance is recorded.
5. Otherwise, attendance is rejected.

---

# Installation

### Clone the Repository

```bash
git clone https://github.com/yourusername/smart-attendance-system.git
```

---

### Install Backend Dependencies

```bash
cd backend
npm install
```

---

### Install Frontend Dependencies

```bash
cd frontend
npm install
```

---

### Run Backend

```bash
npm start
```

---

### Run Frontend

```bash
npm start
```

