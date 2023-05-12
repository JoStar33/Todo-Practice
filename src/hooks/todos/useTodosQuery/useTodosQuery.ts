import { getTodos } from "apis/todos";
import { useQuery } from "react-query";
import { Todos } from "types/todos";

export const useTodosQuery = () => {
  return useQuery<Todos[] | undefined>(["todos"], getTodos, {
    suspense: true
  });
}