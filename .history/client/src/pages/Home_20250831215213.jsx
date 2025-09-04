import { Outlet, Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import Blogs from "./Blogs";

function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* <nav>
        <Link to="/blogs">Blogs</Link> |{" "}
        <Link to="/writers">Writers</Link>

      </nav> */}
      
      <Navbar/>
      <h1>Welcome to DBlogs</h1>
      <Blogs/>
      
    </div>
  );
}

export default Home;
