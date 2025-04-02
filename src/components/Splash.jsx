// import React, { useState, useEffect } from "react";
// import "./splash.css";
// import logoGray from "../grey.png"; // Gray Logo
// import logoWhite from "../hei.png"; // White Logo

// const SplashScreen = ({ onComplete }) => {
//   const [highlightI, setHighlightI] = useState(false);
//   const [showWhiteLogo, setShowWhiteLogo] = useState(false);

//   useEffect(() => {
//     setTimeout(() => setHighlightI(true), 2000); // Turn "i" yellow after 2s
//     setTimeout(() => setShowWhiteLogo(true), 4000); // Show white logo
//     setTimeout(() => onComplete(), 6000); // Complete splash
//   }, [onComplete]);

//   return (
//     <div className="splash-container">
//       {!showWhiteLogo ? (
//         <img src={logoGray} alt="HeiBooky Gray" className="logo-gray" />
//       ) : (
//         <img src={logoWhite} alt="HeiBooky White" className="logo-white fade-in" />
//       )}

//       {/* Highlight "i" in Yellow */}
//       {!showWhiteLogo && <div className={`highlight-i ${highlightI ? "yellow" : ""}`}></div>}

//       {!showWhiteLogo && <div className="spinner"></div>}
//     </div>
//   );
// };

// export default SplashScreen;
