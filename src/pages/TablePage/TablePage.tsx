import DefaultTable from "components/molecules/tables/DefaultTable/DefaultTable";
import { useTodosQuery } from "hooks/todos/useTodosQuery/useTodosQuery";
import { PageContainer, PageHeader } from "styles/mixins.style";

const TablePage = () => {
  let { data: todos } = useTodosQuery();
  if (!todos) {
    todos = [];
  }
  return (
    <PageContainer>
      <PageHeader>
        <h1>테이블타입</h1>
      </PageHeader>
      <DefaultTable tableData={{
        tableHeader: {
          title: "타이틀",
          description: "설명"
        },
        tableRow: todos
      }}/>
    </PageContainer>
  );
};

export default TablePage;