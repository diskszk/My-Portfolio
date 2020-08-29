import Link from "next/link";

// 名前、画像、説明、URL
const ContentsCard = props => {
  const { data } = props;

  return (
    <Link href={data.pageUrl}>
      <li className="contents-card">
        <div>
          <h2>{data.name}</h2>
          <img src={data.image} alt={data.name} />
          <p>{data.description}</p>
        </div>
      </li>
    </Link>
  );
}

export default ContentsCard;