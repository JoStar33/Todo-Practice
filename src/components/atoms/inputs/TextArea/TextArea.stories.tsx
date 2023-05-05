import { Meta, StoryFn } from '@storybook/react';
import TextArea from './TextArea';

export default {
  title: '컴포넌트/아토믹/인풋/TextArea',
  component: TextArea,
} as Meta<typeof TextArea>;

const Template: StoryFn<typeof TextArea> = (args) => <TextArea {...args}/>;

export const TextAreaTest = Template.bind({});
TextAreaTest.args = {
  label: "테스트"
}

export const PasswordTextAreaTest = Template.bind({});
PasswordTextAreaTest.args = {
  label: "비밀번호"
}