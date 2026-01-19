
const RestaurantCard = ({ resData }) => {
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-logo" alt="res-logo" src={resData.img} />
      <h3>{resData.resName}</h3>
      <h4>{resData.cuisines.join(", ")}</h4>
      <h4>{resData.rating}</h4>
      <h4>Rs. {resData.costForTwo / 100} FOR TWO</h4>
      <h4>{resData.deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;