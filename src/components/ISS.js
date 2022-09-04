import React from "react";
import IssImage from "../utilities/iss.png";

const ISS = ({ text }) => {
    return (
      <div style={{ fontSize: "18px" }}>
          <img alt={text} src={IssImage} style={{ width: "75px", height: "50px" }} />
      </div>
    );
}

export default ISS;