import React, { useState, useCallback } from "react";
import SplashScreen from "./components/Splashscreen"; // Adjust the path as necessary

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleComplete = useCallback(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      {!isLoaded ? (
        <SplashScreen onComplete={handleComplete} />
      ) : (
        <div className="homepage"> {/* Your homepage content here */} </div>
      )}
    </>
  );
};

export default App;
