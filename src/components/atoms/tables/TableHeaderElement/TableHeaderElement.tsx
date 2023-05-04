import { TableHeader } from "types/tables";

interface Props {
  header: TableHeader;
}

const TableHeaderElement = ({ header }: Props) => {
  return (
    <tr>
      {
        Object.values(header).map((header) => 
          <th key={header}>{header}</th>)
      }
    </tr>
  );
};

export default TableHeaderElement;