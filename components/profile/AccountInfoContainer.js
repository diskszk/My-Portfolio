import AccountInfo from './AccountInfo';

export const accounts = [
  {
    app: "GitHub",
    url: "https://github.com/diskszk",
    icon: "/images/icons/GitHub-Mark-64px.png"
  },
  {
    app: "Qiita",
    url: "https://qiita.com/diskszk",
    icon: "/images/icons/favicon.png"
  }
];

const AccountInfoContainer = () => {
  return (
    <ul className="account-info-container">
      {accounts.map((account, index) => {
        return (
          <AccountInfo
            app={account.app}
            url={account.url}
            icon={account.icon}
            index={index}
          />
        );
      })}
    </ul>
  );
}

export default AccountInfoContainer;