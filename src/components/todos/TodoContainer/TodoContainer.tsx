import TodoItem from "components/molecules/cards/TodoItem/TodoItem";
import { useTodosQuery } from "hooks/todos/useTodosQuery";
import { Container } from "./TodoContainer.style";
import { useDeleteTodosMutation } from "hooks/todos/useDeleteTodosMutation";

const TodoContainer = () => {
  let { data: todos } = useTodosQuery();
  const { mutate } = useDeleteTodosMutation();
  if (!todos) {
    todos = [];
  }
  const deleteTodos = (id: string) => {
    mutate(id);
  }
  return (
    <Container>
      {todos.map((todo) => (
        <TodoItem close={() => deleteTodos(todo.id)} key={todo.id} title={todo.title} description={todo.description} />
      ))}
    </Container>
  );
};

export default TodoContainer;
