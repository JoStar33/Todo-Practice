import CardPage from "pages/CardPage/CardPage";
import TablePage from "pages/TablePage/TablePage";
import { Route, Routes } from "react-router-dom";
import DetailTodos from "./pages/DetailTodos/DetailTodos";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<CardPage />} />
        <Route path="/table" element={<TablePage/>} />
        <Route path="/todos" element={<DetailTodos />} />
      </Routes>
    </>
  );
};

export default Router;