import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Blogs from "./pages/Blogs";
import Writers from "./pages/Writers";
import Home from "./pages/Home"; // ✅ your Home page
import Layout from "./layout/Layout";
import BlogPage from "./pages/BlogPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="blogs" element={<Blogs />} />
      <Route path="writers" element={<Writers />} />
      <Route path="blogs/:id" element={<BlogPage />} />
    </Route>
  )
);

const App = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

export default App;
