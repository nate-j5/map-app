import React from "react";
import "./Landing.css"; // Importing CSS for styling
import backgroundVideo from "../../assets/background.mp4"; // Import your video file

const Landing = () => {
  return (
    <div className="landing-container">
      <video autoPlay loop muted className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <header className="landing-header">
        <h1>This site is under construction</h1>
        <p>We're making some adjustments to the app to make it better.</p>
        <button className="cta-button">Get Started</button>
      </header>

      {/* TESTING SIMPLER DESIGN */}
      {/* <section className="features-section">
        <div className="feature">
          <h2>Innovative Design</h2>
          <p>
            Crafted with the latest technologies for an exceptional user
            experience.
          </p>
        </div>
        <div className="feature">
          <h2>Seamless Integration</h2>
          <p>
            Easily integrates with your existing tools to boost productivity.
          </p>
        </div>
        <div className="feature">
          <h2>24/7 Support</h2>
          <p>Our team is here to help you every step of the way.</p>
        </div>
      </section> */}

      <footer className="landing-footer">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Landing;
