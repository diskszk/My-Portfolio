import AccountInfo from './AccountInfo';
import { datas } from './AccountsDatas';

const AccountInfoContainer = () => {
  return (
    <ul className="account-info-container">
      {datas.map((data, index) => {
        return (
          <AccountInfo
            app={data.app}
            url={data.url}
            icon={data.icon}
            key={index}
          />
        );
      })}
    </ul>
  );
}

export default AccountInfoContainer;