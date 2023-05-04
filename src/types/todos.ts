import { TableRow } from "./tables";

interface Todos extends TableRow{
  id: string;
  title: string;
  description: string;
}

export type { Todos };

