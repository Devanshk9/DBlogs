import { Outlet, Link } from "react-router-dom";
import Navbar from '../components/Navbar';

function Root() {
  return (
    <div>
      {/* <nav>
        <Link to="/blogs">Blogs</Link> |{" "}
        <Link to="/writers">Writers</Link>
      </nav> */}
      <Navbar/>
      <hr />
      <Outlet /> 
    </div>
  );
}

export default Root;
