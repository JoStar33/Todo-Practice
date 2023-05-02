import Toggle from "components/atomics/switch/Toggle";
import { useMemo } from "react";
import { setThemeModeToLocalStorage } from "styles/themeStyles";
import { themeModeType } from "types/themeTypes";
import { Container } from "./DarkmodeSwitch.style";

interface DarkmodeSwitchProps {
  currentThemeMode: themeModeType;
  changeThemeMode: (newThemeMode: themeModeType) => void;
}

export const DarkmodeSwitch = ({
  currentThemeMode,
  changeThemeMode,
}: DarkmodeSwitchProps) => {
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