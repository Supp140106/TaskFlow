// App.tsx or App.jsx (with TypeScript or JavaScript)
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginPage from "./pages/Login";
import Notfound from "./pages/page-notfound";
import SignupPage from "./pages/Signup";
import DashboardLayout from "./components/DashboardPage";
import Profile from "./components/Profile";
import Settings from "./components/Setting";
import Dashboard from "./components/Dashboard";

function App() {
 
  return (
    <Router>
       <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
