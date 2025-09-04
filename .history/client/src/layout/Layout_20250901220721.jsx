import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <div className="min-h-screen bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 flex items-center justify-center">
  <h1 className="text-5xl text-white font-bold">🔥 Sexy Background 🔥</h1>
</div>
    </>
  );
}

export default Layout;
