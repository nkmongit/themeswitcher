import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  // ? THIS IS THE DEAFULT VALUE FOR THE THEME
  themeMode: "light",
  // ? THESE BELOW METHODS ARE USED FOR SWITCHING COLORS
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
  return useContext(ThemeContext);
}
