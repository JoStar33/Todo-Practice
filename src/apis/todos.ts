import { GET_TODOS } from "constants/todoConstants";
import { Todos } from "types/todos";
import { customAxios } from "./axios/customAxios";

const getTodos = () => {
  const todos = customAxios
    .get(GET_TODOS)
    .then((res) => res)
    .then((res) => res.data)
    .then((data: Todos[]) => data);
  return todos;
};

export { getTodos };

