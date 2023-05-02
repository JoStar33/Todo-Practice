import { Router } from "Router";
import { Header } from "components/layouts/header/Header";
import { SnackbarProvider } from "notistack";
import { useState } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { getThemeModeFromLocalStorage, getThemeObject, setThemeModeToLocalStorage } from "./styles/themeStyles";
import { themeModeType } from "./types/themeTypes";
import { Context } from './utils/Context';

const App = () => {
  const [currentTheme, setCurrentTheme] = useState<DefaultTheme>(getThemeObject(getThemeModeFromLocalStorage()));
  const changeThemeMode = (newThemeMode: themeModeType) => {
    setThemeModeToLocalStorage(newThemeMode);
    setCurrentTheme(() => {
      return getThemeObject(getThemeModeFromLocalStorage())
    });
  }
  return (
    <Context.Provider value={{changeThemeMode}}>
      <ThemeProvider theme={currentTheme}>
        <SnackbarProvider>
          <Header/>
          <Router/>
        </SnackbarProvider>
      </ThemeProvider>
    </Context.Provider>
  );
}

export default App;
