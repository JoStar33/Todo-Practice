import { Route, BrowserRouter as RouterContainer, Routes } from "react-router-dom";
import DetailTodos from "./pages/DetailTodos/DetailTodos";
import MainPage from "./pages/MainPage/MainPage";

const Router = () => {
  return (
    <RouterContainer>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/todos" element={<DetailTodos />} />
      </Routes>
    </RouterContainer>
  );
};

export default Router;