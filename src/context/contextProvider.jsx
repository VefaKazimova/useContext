import React, { createContext, useState } from "react";

export const MainProvider = createContext(null);

const ContextProvider = ({ children }) => {
  const [color, setColor] = useState("");
  const [borderColor, setBorderColor] = useState("black");

  const changeColor = (newColor) => {
    setColor(newColor);
    setBorderColor(newColor); 
  };

  const contextValues = {
    color,
    borderColor,
    changeColor,
  };

  return (
    <MainProvider.Provider value={contextValues}>
      {children}
    </MainProvider.Provider>
  );
};

export default ContextProvider;
