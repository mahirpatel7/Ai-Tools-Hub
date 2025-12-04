import { createContext, useContext, useState } from "react";

const ToolsContext = createContext(null);

export const ToolsProvider = ({ children }) => {
  const [tools, setTools] = useState([]);

  const value = { tools, setTools };
  return <ToolsContext.Provider value={value}>{children}</ToolsContext.Provider>;
};

export const useTools = () => useContext(ToolsContext);
