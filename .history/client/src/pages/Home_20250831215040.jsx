import { Outlet, Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import Blogs from "./Blogs";

function Home() {
  return (
    <div>
      {/* <nav>
        <Link to="/blogs">Blogs</Link> |{" "}
        <Link to="/writers">Writers</Link>
      </nav> */}
      <Navbar/>
      <Blogs/>
      <hr />
      <Outlet /> 
    </div>
  );
}

export default Home;
