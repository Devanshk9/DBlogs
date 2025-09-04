import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet /> {/* nested routes will render here */}
    </>
  );
}

export default Layout;
