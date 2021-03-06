import { useState, useCallback } from 'react';
import TextInput from "./TextInput";
import Button from '@material-ui/core/Button';
import { SendNotificationToSlack } from './SendNotificationToSlack';
import { validateEmailFormat, validateRequiredInput } from '../../functions/validater';

const ContactForms = props => {
  const { isModalOpen, openModal } = props;

  const [name, setName] = useState(""),
        [email, setEmail] = useState(""),
        [description, setDescription] = useState("");
  
  // TextInputコンポーネントに渡すonChangeEvent達
  const inputName = useCallback((event) => {
    setName(event.target.value);
  });
  const inputEmail = useCallback((event) => {
    setEmail(event.target.value);
  });
  const inputDescription = useCallback((event) => {
    setDescription(event.target.value);
  });

  const clickSendButton = () => {
    const isBlank = validateRequiredInput(name, email, description);
    const isValidEmail = validateEmailFormat(email);

    if (isBlank) {
      openModal('必須入力欄が空白です。');
      
      return false;
    } else if (!isValidEmail) {
      openModal('メールアドレスの書式が異なります。')
      return false;
    } else {
      SendNotificationToSlack(name, email, description);
      openModal('お問い合わせの送信が完了致しました。')
      
      // 入力フォームを初期化
      setName("");
      setEmail("");
      setDescription("");
    }
  }

  return (
    <div className="contact-form">
      <TextInput
        label={"お名前(必須)"} multiline={false} rows={1}
        value={name} type={"text"} onChange={inputName}
      />
      <TextInput
        label={"メールアドレス"} multiline={false} rows={1}
        value={email} type={"email"} onChange={inputEmail}
      />
      <TextInput
        label={"お問い合わせ内容"} multiline={true} rows={5}
        value={description} type={"text"} onChange={inputDescription}
      />
      <div className="contact-button-container">
        <Button
          onClick={clickSendButton}
          variant="contained"
          color="primary"
          autoFocus
        >
          送信する
        </Button>
      </div>
    </div>
  );
}

export default ContactForms;