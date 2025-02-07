// src/contexts/MenuContext.js
import React, { createContext, useState } from "react";

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(true);

  const toggleMenuVisibility = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <MenuContext.Provider value={{ isMenuVisible, toggleMenuVisibility }}>
      {children}
    </MenuContext.Provider>
  );
};
