import React from "react";
import logo from "../../assets/tv.png";

export default function Nav() {
  const handleGetData = () => {
    alert(`Download as CSV OR get from our API endpoint:
    https://www.mapappdata.io/api/v1/data"`);
  };
  return (
    <>
      <div
        style={{
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
          width: "100vw",
          height: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "0",
            color: "white",
            width: "98vw",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={logo}
              height={40}
              width={40}
              style={{
                margin: "0",
                color: "white",
              }}
            />
            <p
              style={{
                margin: "0",
                color: "white",
              }}
            >
              City Mapper
            </p>
          </div>

          <div>
            <button
              style={{
                backgroundColor: "#2B2A33", // Blue background color
                color: "white", // White text color
                padding: "10px 20px", // Padding for space around the text
                border: "none", // Remove default border
                borderRadius: "5px", // Rounded corners
                cursor: "pointer", // Show pointer cursor on hover
                fontSize: "13.5px", // Adjust font size
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Add a subtle shadow
                transition: "background-color 0.3s ease", // Smooth hover transition
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#1C1B22")} // Darken on hover
              onMouseOut={(e) => (e.target.style.backgroundColor = "#2B2A33")} // Revert on mouse out
              onClick={handleGetData}
            >
              Get Data
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
