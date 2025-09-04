import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function VerifyOtp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const storedEmail = sessionStorage.getItem("verifyEmail");
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch("http://localhost:5001/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });
      const data = await res.json();
      
      if (data.error) {
        setMessage(data.error);
        return;
      }

      setMessage(data.message);
      // Clear email from session storage
      sessionStorage.removeItem("verifyEmail");
      
      // Redirect to login after successful verification
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (error) {
      console.error("Verification error:", error);
      setMessage("An error occurred during verification");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Verify OTP</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="OTP"
          className="w-full p-2 border rounded"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        <button className="bg-green-600 text-white px-4 py-2 rounded">
          Verify
        </button>
      </form>
      {message && <p className="mt-4 text-center">{message}</p>}
    </div>
  );
}
