import { Outlet, Link } from "react-router-dom";
// import Navbar from "../components/Navbar";
import Blogs from "./Blogs";
import VantaGlobe from "../components/VantaGlobe";


function Home() {
  return (
    <div>
      {/* <nav>
        <Link to="/blogs">Blogs</Link> |{" "}
        <Link to="/writers">Writers</Link>

      </nav> */}
      <VantaGlobe />
      {/* <Navbar /> */}
      <div className="flex flex-col items-center">
        <h1 className="mt-[70px] text-[50px]">Welcome to DBlogs</h1>
        <h1 className="mt-[10px] font-light text-[25px]">CP and Web-Dev blogs!</h1>
        <Blogs />
      </div>
    </div>
  );
}

export default Home;
