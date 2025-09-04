import { useState } from "react";

export default function VerifyOtp() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5001/api/auth/verify-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, otp }),
    });
    const data = await res.json();
    setMessage(data.message || data.error);
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
