//테이블 줄에는 반드시 id값을 명시하시길 바랍니다.
export interface TableRow {
  [rowKey: string]: string;
}

export interface TableHeader {
  [rowKey: string]: string;
}

export interface TableData {
  tableHeader: TableHeader;
  tableRow: TableRow[];
}