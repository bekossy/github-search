import React, { useState } from "react";

export const ToggleMode = () => {
  const [isMode, setIsMode] = useState(false);

  const handleToggle = (data) => {
    data.classList.toggle("light-mode");
    if (isMode) {
      return setIsMode(false);
    } else {
      return setIsMode(true);
    }
  };

  if (!isMode) {
    return (
      <>
        <div
          className="toggleMode"
          onClick={(e) => handleToggle(e.currentTarget.offsetParent)}
        >
          <p>LIGHT</p>
          <svg style={{ width: "22px", height: "22px" }} viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M3.55 19.09L4.96 20.5L6.76 18.71L5.34 17.29M12 6C8.69 6 6 8.69 6 12S8.69 18 12 18 18 15.31 18 12C18 8.68 15.31 6 12 6M20 13H23V11H20M17.24 18.71L19.04 20.5L20.45 19.09L18.66 17.29M20.45 5L19.04 3.6L17.24 5.39L18.66 6.81M13 1H11V4H13M6.76 5.39L4.96 3.6L3.55 5L5.34 6.81L6.76 5.39M1 13H4V11H1M13 20H11V23H13"
            />
          </svg>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div
          className="toggleMode"
          onClick={(e) => handleToggle(e.currentTarget.offsetParent)}
        >
          <p>DARK</p>
          <svg style={{ width: "22px", height: "22px" }} viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M2 12A10 10 0 0 0 15 21.54A10 10 0 0 1 15 2.46A10 10 0 0 0 2 12Z"
            />
          </svg>
        </div>
      </>
    );
  }
};
