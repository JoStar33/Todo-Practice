import TableHeaderElement from "components/atoms/tables/TableHeaderElement/TableHeaderElement";
import TableRowElement from "components/atoms/tables/TableRowElement/TableRowElement";
import { TableData } from "types/tables";
import { DefaultTableContainer } from './DefaultTable.style';

interface Props {
  tableTitle?: string;
  tableData: TableData;
  rowClick?: (id: string) => void;
}

const DefaultTable = ({
  tableTitle,
  tableData,
  rowClick = () => {},
}: Props) => {
  return (
    <div>
      <DefaultTableContainer>
        <caption>{tableTitle}</caption>
        <thead>
          <TableHeaderElement header={tableData.tableHeader} />
        </thead>
        <tbody>
          {tableData.tableRow.map((row) => (
            <TableRowElement
              key={row.id}
              row={row}
              rowClick={() => rowClick(row.id)}
            />
          ))}
        </tbody>
      </DefaultTableContainer>
    </div>
  );
};

export default DefaultTable;
