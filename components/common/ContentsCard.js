import Link from "next/link";
import Head from 'next/head';

// 名前、画像、説明、ページURL
const ContentsCard = props => {
  const { data } = props;

  let path = "";
  if (data.id) {
    path = `/posts/${data.id}`;
  }

  return (
    <Link href={data.pageUrl} as={path}>
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