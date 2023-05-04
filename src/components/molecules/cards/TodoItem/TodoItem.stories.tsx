import { Meta, StoryFn } from '@storybook/react';
import TodoItem from './TodoItem';

export default {
  title: '컴포넌트/조직/카드/TodoItem',
  component: TodoItem,
} as Meta<typeof TodoItem>;

const Template: StoryFn<typeof TodoItem> = (args) => <TodoItem {...args}/>;

export const TodoItemTest = Template.bind({});
TodoItemTest.args = {
  title: "제목입니다.",
  description: "해당 내용을 작성해볼게요."
}