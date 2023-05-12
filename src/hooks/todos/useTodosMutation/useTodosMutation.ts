import { postTodos } from "apis/todos";
import { useContext } from "react";
import { useMutation } from "react-query";
import { PostedTodos } from "types/todos";
import { Context } from "utils/Context";

export const useTodosMutation = (
  titleRef: React.RefObject<HTMLInputElement>,
  descriptionRef: React.RefObject<HTMLTextAreaElement>
) => {
  const { setDialog } = useContext(Context);
  return useMutation((postedTodos: PostedTodos) => postTodos(postedTodos), {
    onSuccess: () => {
      if (!titleRef.current || !descriptionRef.current) {
        return;
      }
      titleRef.current.value = "";
      descriptionRef.current.value = "";
      setDialog("등록이 완료됐습니다!", true);
    },
  });
};
