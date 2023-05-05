import { Meta, StoryFn } from '@storybook/react';
import TodoItemSkeleton from './TodoItemSkeleton';

export default {
  title: '컴포넌트/조직/스켈레톤/TodoItemSkeleton',
  component: TodoItemSkeleton,
} as Meta<typeof TodoItemSkeleton>;

const Template: StoryFn<typeof TodoItemSkeleton> = () => <TodoItemSkeleton />;

export const TodoItemSkeletonTest = Template.bind({});