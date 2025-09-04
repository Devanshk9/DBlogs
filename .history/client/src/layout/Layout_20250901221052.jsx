import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import VantaGlobe from '../components/VantaGlobe';

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <VantaGlobe />
    </>
  );
}

export default Layout;
