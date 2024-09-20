import React from "react";
import "./Landing.css"; // Importing CSS for styling
import backgroundVideo from "../../assets/background.mp4"; // Import your video file

const Landing = () => {
  return (
    <>
      <div className="landing-container">
        <div className="landing-container-1">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="path_to_image.jpg"
            className="background-video"
          >
            <source src={backgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <header className="landing-header">
            <h1 className="landing-title">
              Coming Soon: A Fresh New Experience
            </h1>
            <p className="landing-description">
              Exciting updates are on the way! Stay tuned for a better
              experience.
            </p>
          </header>
        </div>

        <div className="landing-container-2">
          <footer className="landing-footer">
            <p className="landing-footer-text">
              &copy; 2024 MapScout. All rights reserved.
            </p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Landing;
