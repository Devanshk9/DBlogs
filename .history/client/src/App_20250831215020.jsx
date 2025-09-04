import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Blogs from "./pages/Blogs"
import Writers from "./pages/Writers"
import Home from "./pages/Home"   // ✅ your Home page

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="blogs" element={<Blogs />} />
      <Route path="writers" element={<Writers />} />
    </>
  )
);

const App = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}

export default App
