import { DefaultTheme } from "styled-components";
import { themeModes } from "../constants/themeConstants";
import { themeModeType } from "../types/themeTypes";
import { colors } from "./colors";

/** 각 테마들의 색을 설정할때에는 여기서 설정해주세요. */
//라이트 테마
const lightTheme: DefaultTheme = {
  bgColor_primary: colors.PUPP9,
  bgColor_secondary: colors.PUPP8,
  bgColor_tertiary: colors.PUPP7,
  textColor_primary: colors.GRAY0,
  textColor_secondary: colors.GRAY2,
  textColor_tertiary: colors.GRAY4,
  borderColor: colors.GRAY2,
  themeColor: colors.PUPP3,
};

//다크 테마
const darkTheme: DefaultTheme = {
  bgColor_primary: colors.GRAY9,
  bgColor_secondary: colors.GRAY8,
  bgColor_tertiary: colors.GRAY7,
  textColor_primary: colors.PUPP5,
  textColor_secondary: colors.PUPP4,
  textColor_tertiary: colors.PUPP3,
  borderColor: colors.GRAY2,
  themeColor: colors.GRAY6,
};

export const getThemeModeFromLocalStorage = (): themeModeType => {
  const savedThemeMode: string | null = localStorage.getItem("theme");

  if (savedThemeMode) {
    if (savedThemeMode === "lightTheme") {
      return themeModes.LIGHT_THEME;
    } else {
      return themeModes.DARK_THEME;
    }
  } else {
    setThemeModeToLocalStorage(themeModes.LIGHT_THEME);
    return themeModes.LIGHT_THEME;
  }
};

export const setThemeModeToLocalStorage = (
  newThemeMode: themeModeType
): void => {
  if (
    newThemeMode === themeModes.LIGHT_THEME ||
    newThemeMode === themeModes.DARK_THEME
  ) {
    localStorage.setItem("theme", newThemeMode);
  }
};

//테마에 해당하는 오브젝트 정보를 가져온다.
export const getThemeObject = (themeMode: themeModeType): DefaultTheme => {
  if (themeMode === themeModes.DARK_THEME) {
    return darkTheme;
  } else {
    return lightTheme;
  }
};
