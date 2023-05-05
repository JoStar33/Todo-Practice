import React, { useRef } from 'react';
import { PageContainer, PageHeader } from 'styles/mixins.style';
import TextArea from 'components/atoms/inputs/TextArea/TextArea';
import Input from 'components/atoms/inputs/Input/Input';
import RegistButton from 'components/atoms/button/RegistButton/RegistButton';
import { useTodosMutation } from 'hooks/todos/useTodosMutation';

const RegistPage = () => {
  const inputAreaRef = useRef<HTMLInputElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const { mutate } = useTodosMutation(inputAreaRef, textAreaRef);
  const registTodos = () => {
    if(!inputAreaRef.current || !textAreaRef.current) {
      return;
    }
    mutate({
      title: inputAreaRef.current.value,
      description: textAreaRef.current.value
    });
  };
  return (
    <PageContainer>
      <PageHeader>
        <h1>
          등록 페이지
        </h1>
      </PageHeader>
      <Input label={'제목'} placeholder={'제목을 입력해주세요'} valueRef={inputAreaRef}/>
      <TextArea valueRef={textAreaRef} label={'내용'} placeholder={'내용을 입력해주세요.'}/>
      <RegistButton text={'등록하기'} regist={registTodos}/>
    </PageContainer>
  );
};

export default RegistPage;