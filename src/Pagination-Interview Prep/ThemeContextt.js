import { createContext, useState } from "react";

const ThemeContextt = createContext();

export const ThemeContextProviderr = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContextt.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContextt.Provider>
  );
};

export default ThemeContextt;