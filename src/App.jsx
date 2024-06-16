// import { Gallery } from "./Gallery"
// import "./styles.css"


// function App() {


//   return (
//     <>
//       <Gallery />
//     </>
//   )
// }

// export default App
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Gallery } from "./Gallery";
import Home from "./Home";
import Loading from "./Loading";
import "./styles.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Display the loading component for 3 seconds
  }, []); // Empty dependency array ensures useEffect runs only once, like componentDidMount

  return (
    <Router>
      {loading ? (
        <Loading />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
