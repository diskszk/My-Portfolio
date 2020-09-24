import ContentsCard from "./ContentsCard";

const Contents = props => {
  const { datas } = props;

  return (
    <div className="contents">
      <ul className="contents-cards">
        {datas.map((data, index) => {
          return (
            <ContentsCard
              data={data}
              key={index}
            />
          )
        })}
      </ul>
    </div>
  );
}

export default Contents;