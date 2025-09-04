import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";

// Context
import { AuthProvider } from "./context/AuthProvider";
import { AuthContext } from "./context/AuthContext";

// Layout
import Layout from "./layout/Layout";

// Pages
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import BlogPage from "./pages/BlogPage";
import WriterPage from "./pages/WriterPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";   // ✅ fixed import
import Signup from "./pages/SignUp"; // ✅ fixed import
import VerifyOtp from "./pages/VerifyOtp";

// 🔒 ProtectedRoute wrapper
function ProtectedRoute({ children }) {
  const { token } = React.useContext(AuthContext);
  if (!token) return <Navigate to="/login" replace />;
  return children;
}

// Router setup
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="blogs" element={<Blogs />} />

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

      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="verify" element={<VerifyOtp />} />
    </Route>
  )
);

const App = () => {
  return (
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>
  );
};

export default App;
