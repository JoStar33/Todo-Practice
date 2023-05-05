import TodoContainer from "components/todos/TodoContainer/TodoContainer";
import TodoContainerSkeleton from "components/todos/skeletons/TodoContainerSkeleton/TodoContainerSkeleton";
import { Suspense } from "react";
import { PageContainer, PageHeader } from "styles/mixins.style";

const CardPage = () => {
  return (
    <PageContainer>
      <PageHeader>
        <h1>카드타입</h1>
      </PageHeader>
      <Suspense fallback={<TodoContainerSkeleton/>}>
        <TodoContainer/>
      </Suspense>
    </PageContainer>
  );
};

export default CardPage;