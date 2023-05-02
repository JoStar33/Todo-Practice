import Toggle from "components/atoms/switch/Toggle";
import { useContext, useMemo } from "react";
import { getThemeModeFromLocalStorage, setThemeModeToLocalStorage } from "styles/themeStyles";
import { Context } from "utils/Context";
import { Container } from "./DarkmodeSwitch.style";

const DarkmodeSwitch = () => {
  const currentThemeMode = getThemeModeFromLocalStorage();
  const { changeThemeMode } = useContext(Context);
  const handleThemeChange = () => {
    if (currentThemeMode === "darkTheme") {
      changeThemeMode("lightTheme");
      setThemeModeToLocalStorage("lightTheme");
      return;
    }
    changeThemeMode("darkTheme");
    setThemeModeToLocalStorage("darkTheme");
  }
  const themeMode = useMemo<boolean>(() => {
    return currentThemeMode === "darkTheme" ? true : false
  }, [currentThemeMode]);
  return (
    <Container>
      <Toggle handleChange={handleThemeChange} checked={themeMode}/>
    </Container>
  );
};

export default DarkmodeSwitch;