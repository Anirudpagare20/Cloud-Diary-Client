import React, { useEffect, useState } from "react";

const SplashScreen = ({ onSplashComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const splashTimer = setTimeout(() => {
      setIsVisible(false);
      onSplashComplete();
    }, 3000);

    return () => clearTimeout(splashTimer);
  }, [onSplashComplete]);

  return isVisible && (
    <div className="splash-screen">
      <h1>Cloud_Diary</h1>
      <p>Made With<span className="heart">❤️</span>By Anirudha_Pagare</p>
      <div className="additional-content">
        <p>Welcome to Cloud_Diary, your personal space for memories and thoughts.</p>
        <p>Explore, write, and create beautiful moments with Cloud_Diary.</p>
      </div>
    </div>
  );
};

export default SplashScreen;
