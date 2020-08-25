import {WEBHOOK_URL} from '../../webhook/webhookConfig';
import fetch from 'node-fetch';

export const SendNotificationToSlack = (name, email, description) => {

  const payload = {
    text: 
    "お問い合わせがありました。\n" +"お名前: " + name +
    "\nEmail: " + email +
    "\n問い合わせ内容\n" +
    description
  }

  const url = WEBHOOK_URL;
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(payload)
  }).then(() => {
    alert("お問い合わせの送信が完了致しました。");
    return;
  }).catch((error) => {
    console.error("Error!", error);
    alert("エラーが発生しました。\nしばらく待ってから今一度お試しください。");
    return;
  });
}