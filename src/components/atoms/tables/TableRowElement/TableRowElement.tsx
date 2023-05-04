import { useMemo } from "react";
import { TableRow } from "types/tables";

interface Props {
  row: TableRow;
  rowClick?: () => void;
}

const TableRowElement = ({row, rowClick}: Props) => {
  const rowValues = useMemo(() => {
    const showedRow = {...row};
    delete showedRow.id;
    return Object.values(showedRow);
  }, [row]);
  return (
    <tr onClick={rowClick} style={{cursor: rowClick ? "pointer" : "default"}}>
      {
        rowValues.map((rowElement) => 
          <td key={rowElement}>{rowElement}</td>
        )
      }
    </tr>
  );
};

export default TableRowElement;