import { createContext } from "react";
import { themeModeType } from "../types/themeTypes";

export const Context = createContext({
  changeThemeMode: (newThemeMode: themeModeType) => {},
  setDialog: (dialogText: string, isShow: boolean) => {}
});