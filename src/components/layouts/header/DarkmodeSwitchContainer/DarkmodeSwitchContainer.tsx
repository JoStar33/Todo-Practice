
import { useContext } from "react";
import { getThemeModeFromLocalStorage } from "styles/themeStyles";
import { Context } from "utils/Context";
import { DarkmodeSwitch } from "../DarkmodeSwitch/DarkmodeSwitch";

export const DarkmodeSwitchContainer = () => {
  const currentThemeMode = getThemeModeFromLocalStorage();
  const { changeThemeMode } = useContext(Context);
  return (
    <DarkmodeSwitch
      currentThemeMode={currentThemeMode}
      changeThemeMode={changeThemeMode}
    />
  );
};
