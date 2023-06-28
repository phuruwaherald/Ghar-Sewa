import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  createBrowserRouter,
} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
// import Logout from "./components/Logout";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <Navbar />
      {/* <Router> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <ProtectedRoute path="/login" element={<Login />} auth={true} />
          <ProtectedRoute path="/register" element={<Register />} auth={true} />
          <ProtectedRoute path="/logout" element={<Logout />} auth={true} /> */}
        <Route path="/login" element={<Login />} auth={true} />
        <Route path="/register" element={<Register />} auth={true} />
        {/* <Route path="/logout" element={<Logout />} auth={true} /> */}
      </Routes>
      {/* </Router> */}
      <Footer />
    </>
  );
}

export default App;
