// File: App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Profile from "./pages/profile/Profile";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
