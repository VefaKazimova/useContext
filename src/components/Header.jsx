import React from "react";

const Header = () => {
  return (
    <div>
      <h2
        style={{
          alignItems: "center",
          fontSize: "1.5em",
          justifyContent: "center",
          fontFamily: "Roboto Mono,monospace",
          fontWeight: "bold",
          display: "flex",
        }}
      >
        Vafa Redux <span style={{color: "rgb(126, 87, 194)", paddingLeft:"10px"}}>Note</span>Pad
      </h2>
    </div>
  );
};

export default Header;
