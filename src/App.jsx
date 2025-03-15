// import React, { lazy } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Home from "./pages/Home/Home";
// import Projects from "./pages/Projects/Projects";
// import Admin from "./pages/Admin/Admin";

// import AboutUs from "./pages/AboutUs/AboutUs";

// // dynamic pages rendering

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/projects" element={<Projects />} />
//         <Route path="/admin" element={<Admin />} />
//         <Route path="/about-us" element={<AboutUs />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;

import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Admin from "./pages/Admin/Admin";
import AboutUs from "./pages/AboutUs/AboutUs";
import Loader from "./components/Loader/Loader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (or fetch data if needed)
    setTimeout(() => {
      setLoading(false);
    }, 5000); // Adjust timing as necessary
  }, []);

  return (
    <BrowserRouter>
      {loading ? (
        <Loader /> // Show loader while loading is true
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default App;
