import { Meta, StoryFn } from '@storybook/react';
import Header from './Header';

export default {
  title: '컴포넌트/레이아웃/헤더/Header',
  component: Header,
} as Meta<typeof Header>;

const Template: StoryFn<typeof Header> = () => <Header/>;

export const HeaderTest = Template.bind({});