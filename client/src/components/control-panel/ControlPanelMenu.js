import React, { useState } from "react";
import "./ControlPanelMenu.css";
import cities from "../../data/cities.json";       // Assuming the JSON file is located in the `data` folder
import industries from "../../data/industries.json"; // Same for the industries JSON

const ControlPanelMenu = () => {
  const [ventureName, setVentureName] = useState("");
  const [city, setCity] = useState("");
  const [industry, setIndustry] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Venture: ${ventureName}\nCity: ${city}\nIndustry: ${industry}`);
  };

  return (
    <div className="control-panel">
        <h3 className="control-panel__title">Welcome to the Venture Dashboard</h3>
      <p className="control-panel___description">
        Use this form to add a new venture to the dashboard. Simply enter the venture's name, select the city and industry, and click "Add Item" to save.
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="ventureName">Venture Name:</label>
        <input
          type="text"
          id="ventureName"
          value={ventureName}
          onChange={(e) => setVentureName(e.target.value)}
          placeholder="Enter venture name"
          required
        />

        <label htmlFor="city">City:</label>
        <select
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        >
          <option value="">Select a city</option>
          {cities.map((cityOption) => (
            <option key={cityOption.id} value={cityOption.city}>
              {cityOption.city}, {cityOption.state}
            </option>
          ))}
        </select>

        <label htmlFor="industry">Industry:</label>
        <select
          id="industry"
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
          required
        >
          <option value="">Select an industry</option>
          {industries.map((industryOption) => (
            <option key={industryOption.id} value={industryOption.name}>
              {industryOption.name}
            </option>
          ))}
        </select>

        <button className="submitButton" type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default ControlPanelMenu;
