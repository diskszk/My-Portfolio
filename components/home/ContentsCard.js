import Link from "next/link";

const ContentsCard = props => {
  const {className, icon, page, text} = props;

  return (
    <Link href={page.path}>
      <li className="home-contents-card">
        <div>
          <h2>{page.contents}</h2>
          <img src={icon} alt={page.contents} />
          <p>{text}</p>
        </div>
      </li>
    </Link>
  );
}

export default ContentsCard;