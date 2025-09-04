import { Outlet, Link } from "react-router-dom";

function Root() {
  return (
    <div>
      <nav>
        <Link to="/blogs">Blogs</Link> |{" "}
        <Link to="/writers">Writers</Link>
      </nav>
      <hr />
      <Outlet /> {/* Child routes render here */}
    </div>
  );
}

export default Root;
