import React, { useState } from "react";

import "../styles/Toolbar.css";

const Toolbar = ({ tailedFile }) => {
  const LoadLogFile = (pathd) => {
    // tailedFile = new Tail(pathd);
    console.log(tailedFile);
  };

  return (
    <>
      <div className="toolbar-container">
        <input
          type="file"
          onChange={(e) => {
            LoadLogFile(e.target.files[0].path);
          }}
        />
      </div>
    </>
  );
};

export default Toolbar;
