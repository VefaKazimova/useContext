import React, { createContext, useState } from "react";

export const MainProvider = createContext(null);

const ContextProvider = ({ children }) => {
  const [color, setColor] = useState("");

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  const contextValues = {
    color,
    changeColor,
  };

  return (
    <MainProvider.Provider value={contextValues}>
      {children}
    </MainProvider.Provider>
  );
};

export default ContextProvider;
