"use client";

import { createContext, useState } from "react";
const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [topic, setTopic] = useState("india");
  return (
    <MyContext.Provider value={{ topic, setTopic }}>
      {children}
    </MyContext.Provider>
  );
};
export default MyContext;
