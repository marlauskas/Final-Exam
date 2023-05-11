import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";
const theme = {};

const ThemeProvider = ({ children }) => {
  return (
    <StyledComponentsThemeProvider theme={theme}>
      {children}
    </StyledComponentsThemeProvider>
  );
};

export default ThemeProvider;
