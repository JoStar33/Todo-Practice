import { Meta, StoryFn } from '@storybook/react';
import TodoContainer from './TodoContainer';

export default {
  title: '컴포넌트/투두/TodoContainer',
  component: TodoContainer,
} as Meta<typeof TodoContainer>;

const Template: StoryFn<typeof TodoContainer> = () => <TodoContainer/>;

export const TodoContainerTest = Template.bind({});