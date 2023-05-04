import Router from "Router";
import Header from "components/layouts/header/Header/Header";
import { SnackbarProvider } from "notistack";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import styled, { DefaultTheme, ThemeProvider } from "styled-components";
import {
  getThemeModeFromLocalStorage,
  getThemeObject,
  setThemeModeToLocalStorage,
} from "./styles/themeStyles";
import { themeModeType } from "./types/themeTypes";
import { Context } from "./utils/Context";

const queryClient = new QueryClient();

const App = () => {
  const [currentTheme, setCurrentTheme] = useState<DefaultTheme>(
    getThemeObject(getThemeModeFromLocalStorage())
  );
  const changeThemeMode = (newThemeMode: themeModeType) => {
    setThemeModeToLocalStorage(newThemeMode);
    setCurrentTheme(() => {
      return getThemeObject(getThemeModeFromLocalStorage());
    });
  };
  return (
    <QueryClientProvider client={queryClient}>
      <Context.Provider value={{ changeThemeMode }}>
        <ThemeProvider theme={currentTheme}>
          <AppLayout>
            <SnackbarProvider>
              <Header />
              <Router />
            </SnackbarProvider>
          </AppLayout>
        </ThemeProvider>
      </Context.Provider>
    </QueryClientProvider>
  );
};

const AppLayout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bgColor_secondary};
`;

export default App;
