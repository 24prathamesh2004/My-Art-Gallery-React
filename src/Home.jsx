import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

function Home() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/gallery");
  };

  return (
    <div className="front-page">
      <h1 className="heading">Expressions on Canvas:<span className="head"> A Personal Art Gallery</span></h1>
      <p className="description">
        Welcome to my art gallery, showcasing a vibrant collection of my original paintings. Each piece is a unique expression of creativity, capturing the essence of moments and emotions on canvas. Dive in and explore the colors and stories brought to life through my brushstrokes.
      </p>
    
    <div>
      <button onClick={handleButtonClick} className="btn">Explore My Paintings...</button>
    </div>
    </div>
  );
}

export default Home;
