import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";


import Layout from "./layout/Layout";

// Pages
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import BlogPage from "./pages/BlogPage";
import WriterPage from "./pages/WriterPage";
import About from "./pages/About";
import Contact from "./pages/Contact";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />

      {/* Protected routes */}
      <Route
        path="blogs"
        element={
          <ProtectedRoute>
            <Blogs />
          </ProtectedRoute>
        }
      />
      <Route
        path="blogs/:id"
        element={
          <ProtectedRoute>
            <BlogPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="writers/:id"
        element={
          <ProtectedRoute>
            <WriterPage />
          </ProtectedRoute>
        }
      />
    </Route>
  )
);

export default function App() {
  return (
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>
  );
}
