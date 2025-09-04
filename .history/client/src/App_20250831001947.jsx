import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Blogs from "./pages/Blogs"
import Writers from "./pages/Writers"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="blogs" element={<Blogs />} />
      <Route path="writers" element={<Writers />} />
    </Route>
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