import { TodoItemCard } from "./TodoItem.style";

interface Props {
  title: string;
  description: string;
}

const TodoItem = ({title, description}: Props) => {
  return (
    <TodoItemCard>
      <h2>{title}</h2>
      <p>{description}</p>
    </TodoItemCard>
  );
};

export default TodoItem;