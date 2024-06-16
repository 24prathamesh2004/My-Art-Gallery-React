import React, { useEffect } from "react";
import "./styles.css";

function Loading() {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelector(".load").classList.add("hidden");
    }, 3000); // Hide after 3 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="container">
      <h1 className="load">Loading...</h1>
    </main>
  );
}

export default Loading;
