// File: App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Profile from "./pages/profile/Profile";
import { Students } from "./pages/students/Students";
import { Coaches } from "./pages/coaches/Coaches";
import { Assignment } from "./pages/assignment/Assignment";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/students" element={<Students />} />
          <Route path="/coaches" element={<Coaches />} />
          <Route path="/manage-coaching" element={<Assignment />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
