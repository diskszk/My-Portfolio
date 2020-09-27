type BookCardProps = {
  key: number;
  author: string;
  description: string;
  infoLink: string;
  thumbnail: string;
  title: string;
}

const BookCard = (props: BookCardProps) => {

  return (
    <li className="book">
      <div className="book-img">
        <img src={props.thumbnail} />
      </div>
      <div className="book-info">
        <p>著者: {props.author}</p>
        <p>{props.title}</p>
        <p className="props-description">{props.description}</p>
        <span>本の詳細は
        <a href={props.infoLink} target="_blank" rel="noopener noreferrer">こちら</a>
        </span>
      </div>
    </li>
  );
}

export default BookCard;