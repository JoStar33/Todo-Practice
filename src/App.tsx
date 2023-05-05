import Router from "Router";
import Header from "components/layouts/header/Header/Header";
import { SnackbarProvider } from "notistack";
import { useRef, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import styled, { DefaultTheme, ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import {
  getThemeModeFromLocalStorage,
  getThemeObject,
  setThemeModeToLocalStorage,
} from "./styles/themeStyles";
import { themeModeType } from "./types/themeTypes";
import { Context } from "./utils/Context";
import ValidateDialog from "components/molecules/dialogs/ValidateDialog/ValidateDialog";

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
  const dialogText = useRef<string>('');
  const [dialogShow, setDialogShow] = useState<boolean>(false);
  const setDialog = (text: string, isShow: boolean) => {
    setDialogShow(isShow);
    dialogText.current = text;
  }
  return (
    <QueryClientProvider client={queryClient}>
      <Context.Provider value={{ changeThemeMode, setDialog }}>
        <ThemeProvider theme={currentTheme}>
          <AppLayout>
            <GlobalStyles/>
            <SnackbarProvider>
              <BrowserRouter>
                <Header />
                <Router />
                <ValidateDialog dialogShow={dialogShow} dialogText={dialogText.current} handleDialog={() => setDialogShow(false)}/>
              </BrowserRouter>
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
