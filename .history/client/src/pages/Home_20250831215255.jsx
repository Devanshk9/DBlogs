import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Blogs from "./Blogs";

function Home() {
  return (
    <div>
      {/* <nav>
        <Link to="/blogs">Blogs</Link> |{" "}
        <Link to="/writers">Writers</Link>

      </nav> */}

      <Navbar />
      <div className="flex flex-col">
        <h1>Welcome to DBlogs</h1>
        <Blogs />
      </div>
    </div>
  );
}

export default Home;
