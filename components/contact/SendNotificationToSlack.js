import fetch from "node-fetch";

export const SendNotificationToSlack = (name, email, description) => {
  const webHookUrl = process.env.NEXT_PUBLIC_WEBHOOK_URL || "";
  console.log("hook", webHookUrl);
  const payload = {
    text:
      "お問い合わせがありました。\n" +
      "お名前: " +
      name +
      "\nEmail: " +
      email +
      "\n問い合わせ内容\n" +
      description,
  };

  fetch(webHookUrl, {
    method: "POST",
    body: JSON.stringify(payload),
  })
    .then(() => {
      return;
    })
    .catch((error) => {
      console.error("Error!", error);
      alert("エラーが発生しました。\nしばらく待ってから今一度お試しください。");
      return;
    });
};
