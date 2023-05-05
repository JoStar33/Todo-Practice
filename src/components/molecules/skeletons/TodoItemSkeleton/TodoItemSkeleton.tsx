import React from 'react';
import { TodoItemCard } from "../../cards/TodoItem/TodoItem.style";
import { SkeletonTitleText, SkeletonDescriptionText } from './TodoItemSkeleton.style';

const TodoItemSkeleton = () => {
  return (
    <TodoItemCard>
      <SkeletonTitleText/>
      <SkeletonDescriptionText/>
    </TodoItemCard>
  );
};

export default TodoItemSkeleton;