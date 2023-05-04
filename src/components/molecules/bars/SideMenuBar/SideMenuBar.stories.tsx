import { Meta, StoryFn } from '@storybook/react';
import { AiFillFolder, AiFillHome } from 'react-icons/ai';
import { DiReact } from 'react-icons/di';
import SideMenuBar from './SideMenuBar';

export default {
  title: '컴포넌트/조직/바/SideMenuBar',
  component: SideMenuBar,
} as Meta<typeof SideMenuBar>;

const Template: StoryFn<typeof SideMenuBar> = (args) => <SideMenuBar {...args}/>;

export const SideMenuBarTest = Template.bind({});
SideMenuBarTest.args = {
  menu: [{
    id: "1", 
    icon: <AiFillHome/>, 
    label: "홈으로",
    router: "/"
  }, {
    id: "2", 
    icon: <AiFillFolder/>, 
    label: "파일조회",
    router: "/"
  }, {
    id: "3",
    icon: <DiReact/>,
    label: "리액트",
    router: "/"
  }]
}
