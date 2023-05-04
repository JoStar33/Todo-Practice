import TodoItem from "components/molecules/cards/TodoItem/TodoItem";
import { useTodosQuery } from "hooks/todos/useTodosQuery";
import { Container } from "./TodoContainer.style";

const TodoContainer = () => {
  let { data: todos } = useTodosQuery();
  if (!todos) {
    todos = [];
  }
  return (
    <Container>
      {todos.map((todo) => (
        <TodoItem key={todo.id} title={todo.title} description={todo.description} />
      ))}
    </Container>
  );
};

export default TodoContainer;
