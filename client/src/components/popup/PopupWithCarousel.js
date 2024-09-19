import React, { useState } from "react";
import { Popup } from "react-map-gl";
import "./PopupWithCarousel.css"; // Import CSS for styling
import { FaArrowLeft, FaArrowRight, FaTrash } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";


const PopupWithCarousel = ({ popupInfo, setPopupInfo }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % popupInfo.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + popupInfo.length) % popupInfo.length
    );
  };

  const currentCity = popupInfo[currentIndex];

  return (
    <Popup
      anchor="top"
      className="custom-popup"
      longitude={Number(currentCity.longitude)}
      latitude={Number(currentCity.latitude)}
      onClose={() => setPopupInfo(null)}
    >
      <div className="popup-content">
        <div className="popup-wrapper">
          <div>
            <h4>{currentCity.city}</h4>
          </div>
          <div className="popup-body">
            <div>
              <p className="popup-industry-text">
                <b>Prospect: </b>Great
              </p>
              <p className="popup-industry-text">
                <b>Industry: </b>Automotive
              </p>
              <p className="popup-industry-text">
                <b>Tax: </b>Sales 15% | Business 22%{" "}
              </p>
            </div>

            <p className="popup-industry-analysis">
              Here's an updated design for the Mapbox Popup component, styled to
              look like a card with the fields of the tile, industry, and
              analysis of the market.
            </p>
          </div>
          <div className="popup-navigation">
            {/* <button onClick={handlePrev}>&lt;</button> */}
            <p className="popup-pagination-count">{currentIndex}/{popupInfo.length}</p>
        <button>
        <MdKeyboardArrowRight height={40} width={40} className="arrow-icon" onClick={handleNext} />
        </button>
            
          </div>
        </div>
      </div>
    </Popup>
  );
};

export default PopupWithCarousel;
