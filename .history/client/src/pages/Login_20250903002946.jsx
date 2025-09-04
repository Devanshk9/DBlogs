
import { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import api from "../utils/axios";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useContext(AuthContext);
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  // Get the page they were trying to visit or default to home
  const from = location.state?.from?.pathname || "/";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5001/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      
      if (data.error) {
        setMessage(data.error);
        return;
      }
      
      if (data.token && data.user) {
        // Call the login function from context with user data and token
        login(data.user, data.token);
        setMessage("Login successful!");
        // Redirect to home page after a short delay to show the success message
        setTimeout(() => navigate("/"), 1000);
      } else {
        setMessage("Login failed - Invalid response from server");
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage("An error occurred during login");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
          onChange={handleChange}
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Login
        </button>
      </form>
      {message && <p className="mt-4 text-center">{message}</p>}
    </div>
  );
}
