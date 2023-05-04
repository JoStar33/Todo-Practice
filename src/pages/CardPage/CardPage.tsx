import TodoContainer from "components/todos/TodoContainer/TodoContainer";
import { PageContainer, PageHeader } from "styles/mixins.style";

const CardPage = () => {
  return (
    <PageContainer>
      <PageHeader>
        <h1>카드타입</h1>
      </PageHeader>
      <TodoContainer/>
    </PageContainer>
  );
};

export default CardPage;