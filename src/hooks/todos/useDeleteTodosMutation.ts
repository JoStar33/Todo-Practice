import { deleteTodos } from "apis/todos";
import { useContext } from "react";
import { useMutation, useQueryClient } from "react-query";
import { Context } from "utils/Context";

export const useDeleteTodosMutation = () => {
  const queryClient = useQueryClient();
  const { setDialog } = useContext(Context);
  return useMutation((id: string) => deleteTodos(id), {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
      setDialog("삭제가 완료되었습니다!", true);
    },
  });
};