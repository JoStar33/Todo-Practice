import styled from "styled-components";
import { setThemeModeToLocalStorage } from "styles/themeStyles";
import { themeModeType } from "types/themeTypes";

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
    } else {
      changeThemeMode("darkTheme");
      setThemeModeToLocalStorage("darkTheme");
    }
  };

  return (
    <Container>
      <input
        id="darkmode_switch"
        color="default"
        type="checkbox"
        checked={currentThemeMode === "darkTheme" ? true : false}
        onChange={handleThemeChange}
      />
      <Label htmlFor="darkmode_switch">
        {currentThemeMode === "darkTheme" ? (
          <>
            <IconName>다크모드 ON</IconName>
          </>
        ) : (
          <>
            <IconName>라이트모드 ON</IconName>
          </>
        )}
      </Label>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
`;

const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.themeColor};
  cursor: pointer;
`;

const IconName = styled.span`
  font-size: 14px;
  font-weight: 600;
`;