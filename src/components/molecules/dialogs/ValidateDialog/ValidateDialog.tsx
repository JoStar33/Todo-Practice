import CloseButton from 'components/atoms/button/CloseButton/CloseButton';
import TextBox from 'components/atoms/commons/TextBox/TextBox';
import { Dialog, DialogContainer } from './ValidateDialog.style';

interface Props {
  dialogShow: boolean;
  dialogText: string;
  handleDialog: () => void;
}

const ValidateDialog = ({dialogShow, dialogText, handleDialog}: Props) => {
  return (
    <>
      {
        dialogShow &&
        <Dialog>
          <DialogContainer>
            <CloseButton close={handleDialog}/>
            <TextBox text={dialogText} />
          </DialogContainer>
        </Dialog>
      }
    </>
  );
};

export default ValidateDialog;