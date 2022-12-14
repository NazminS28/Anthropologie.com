export const ProductCard = (props) => {
  return (
    <div>
      <div className="item">
        <div className="card">
          <img src={props.cardData.img1} />
          <p>{props.cardData.title}</p>
        </div>
      </div>
    </div>
  );
};
