const AccountInfo = props => {

  const { app, url, icon, index } = props;
  const className = `account-info-${app}`;
  const altText = `${app}のアイコン`;

  return (
    <li className={className}>
      <div className="app-icon">
        <a href={url} target="_blank" rel="noopener noreferrer">
        {app}
         <img src={icon} alt={altText}/>
        </a>
      </div>
    </li>
  );
}

export default AccountInfo;