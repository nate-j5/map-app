import React from 'react';
import './NotFound.css'; // Import CSS for styling

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <button className="back-home-button" onClick={() => window.history.back()}>
        Go Back
      </button>
    </div>
  );
};

export default NotFound;
