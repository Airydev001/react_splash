
import React, { useEffect, useState } from "react";
import "../../src/index.css"; // Ensure path is correct
import heiLogo from "./hei.png"; // White Logo
 // Keyhole overlay

const SplashScreen = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [highlightI, setHighlightI] = useState(false);
  const [showPinhole, setShowPinhole] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setHighlightI(true); // Highlight keyhole in "i" after 2s
    }, 2000);

    setTimeout(() => {
      setShowIntro(false); // Transition from intro to looping animation
    }, 4000);

    setTimeout(() => {
      setShowPinhole(false); // Hide pinhole after animation
    }, 4500);
  }, []);

  return (
    <div className="splash-container">
      {/* HeiBooky Logo */}
      <div className="logo-container">
        <img
          src={heiLogo}
          alt="HeiBooky"
          className={`logo ${showIntro ? "intro-logo" : "loop-logo"}`}
        />

        
      </div>

      {/* Highlight Keyhole in 'i' */}
      {highlightI && <div className="highlight-keyhole"></div>}
    </div>
  );
};

export default SplashScreen;
