import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch("http://localhost:5001/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      
      if (data.error) {
        setMessage(data.error);
        return;
      }

      // Store email in sessionStorage for verification page
      sessionStorage.setItem("verifyEmail", form.email);
      setMessage(data.message);
      
      // Redirect to verify page after 1.5 seconds
      setTimeout(() => {
        navigate("/verify");
      }, 1500);
    } catch (error) {
      console.error("Signup error:", error);
      setMessage("An error occurred during signup");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Signup</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="w-full p-2 border rounded"
          onChange={handleChange}
        />
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
          Sign Up
        </button>
      </form>
      {message && <p className="mt-4 text-center">{message}</p>}
    </div>
  );
}
