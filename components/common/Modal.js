import { Button } from '@material-ui/core';

const Modal = props => {
  const { isModalOpsn, closeModal, message } = props;

  let modal = <></>;
  console.log(isModalOpsn);

  if (isModalOpsn) {
    modal = (
      <div className="modal">
        <div className="modal-inner">
         <div className="modal-content">
          <p>{message}</p>
          <Button
            onClick={closeModal}
            variant="contained"  
            color="primary"
            autoFocus
          >
            閉じる
          </Button>
        </div>
      </div>
    </div>
    );
  }

  return (
    <div>
      {modal}
    </div>
  );
}

export default Modal;