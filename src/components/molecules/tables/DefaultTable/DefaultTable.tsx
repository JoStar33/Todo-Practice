import TableHeader from "components/atoms/tables/TableHeader/TableHeader";
import TableRow from "components/atoms/tables/TableRow/TableRow";
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
          <TableHeader header={tableData.tableHeader} />
        </thead>
        <tbody>
          {tableData.tableRow.map((row) => (
            <TableRow
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
