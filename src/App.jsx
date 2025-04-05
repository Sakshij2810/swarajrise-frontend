import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Admin from "./pages/Admin/Admin";
import AboutUs from "./pages/AboutUs/AboutUs";
import Loader from "./components/Loader/Loader";
import ContactUs from "./pages/ContactUs/ContactUs";
import SmoothScroll from "./components/SmoothScroll/SmoothScroll";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <SmoothScroll>
        <Home />
      </SmoothScroll>
    ),
  },
  {
    path: "/projects",
    element: (
      <SmoothScroll>
        <Projects />
      </SmoothScroll>
    ),
  },
  {
    path: "/admin",
    element: (
      <SmoothScroll>
        <Admin />
      </SmoothScroll>
    ),
  },
  {
    path: "/about",
    element: (
      <SmoothScroll>
        <AboutUs />
      </SmoothScroll>
    ),
  },
  {
    path: "/contact",
    element: (
      <SmoothScroll>
        <ContactUs />
      </SmoothScroll>
    ),
  },
]);

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (or fetch data if needed)
    setTimeout(() => {
      setLoading(false);
    }, 5000); // Adjust timing as necessary
  }, []);

  return (
    <div>
      {loading ? (
        <Loader /> // Show loader while loading is true
      ) : (
        <RouterProvider router={router} />
      )}
    </div>
  );
};

export default App;
