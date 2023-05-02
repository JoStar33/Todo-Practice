import { Route, Routes } from "react-router-dom";
import DetailTodos from "./pages/DetailTodos/DetailTodos";
import MainPage from "./pages/MainPage/MainPage";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/todos" element={<DetailTodos />} />
    </Routes>
  );
};
