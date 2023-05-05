import CloseButton from "components/atoms/button/CloseButton/CloseButton";
import { TodoItemCard } from "./TodoItem.style";

interface Props {
  title: string;
  description: string;
  close: () => void;
}

const TodoItem = ({ title, description, close }: Props) => {
  return (
    <TodoItemCard>
      <h2>{title}</h2>
      <p>{description}</p>
      <CloseButton close={close} />
    </TodoItemCard>
  );
};

export default TodoItem;
