import { TableRow } from "./tables";

interface Todos extends TableRow{
  id: string;
  title: string;
  description: string;
}

interface PostedTodos {
  title: string;
  description: string;
}

export type { Todos, PostedTodos };

