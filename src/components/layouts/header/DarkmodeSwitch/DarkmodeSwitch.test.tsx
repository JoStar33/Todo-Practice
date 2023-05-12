import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DarkmodeSwitch from "./DarkmodeSwitch";

describe("레이아웃/헤더/다크모드 스위치", () => {
  test("다크모드 정상동작 확인 테스트", () => {
    render(<DarkmodeSwitch/>);
    const darkModeSwitch = screen.getByRole("toggle", { hidden: true });
    return userEvent.click(darkModeSwitch).then(() => {
      const themeMode = localStorage.getItem("theme");
      expect(themeMode).toBe("darkTheme");
    });
  })
});