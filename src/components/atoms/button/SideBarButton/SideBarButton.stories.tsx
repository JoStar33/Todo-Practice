import { Meta, StoryFn } from '@storybook/react';
import SideBarButton from './SideBarButton';

export default {
  title: '컴포넌트/조직/버튼/SideBarButton',
  component: SideBarButton,
} as Meta<typeof SideBarButton>;

const Template: StoryFn<typeof SideBarButton> = (args) => <SideBarButton {...args}/>;

export const SideBarButtonTest = Template.bind({});