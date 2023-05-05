import React from 'react';
import { Container } from "../../TodoContainer/TodoContainer.style";
import TodoItemSkeleton from 'components/molecules/skeletons/TodoItemSkeleton/TodoItemSkeleton';

const TodoContainerSkeleton = () => {
  return (
    <Container>
      {
        new Array(6).fill(1).map((_, index) => <TodoItemSkeleton key={index}/>)
      }
    </Container>
  );
};

export default TodoContainerSkeleton;