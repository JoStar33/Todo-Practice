import { Meta, StoryFn } from '@storybook/react';
import TableRowElement from './TableRowElement';

export default {
  title: '컴포넌트/아토믹/테이블/TableRowElement',
  component: TableRowElement,
} as Meta<typeof TableRowElement>;

const Template: StoryFn<typeof TableRowElement> = (args) => <TableRowElement {...args}/>;

export const TableRowElementTest = Template.bind({});
TableRowElementTest.args = {
  row: {
    title: "안녕",
    content: "내용입니다.",
    information: "정보입니다."
  }
}