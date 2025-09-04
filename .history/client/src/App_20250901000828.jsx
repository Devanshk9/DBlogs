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
import WriterPage from "./pages/WriterPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/SignUp";
import VerifyOtp from "./pages/VerifyOtp";
import Signup from "./pages/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="blogs" element={<Blogs />} />
      <Route path="writers" element={<Writers />} />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="verify" element={<VerifyOtp />} />
      <Route path="blogs/:id" element={<BlogPage />} />
      <Route path="writers/:id" element={<WriterPage />} />
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
