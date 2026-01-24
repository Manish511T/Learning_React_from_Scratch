const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,w_508,h_320,c_fill/";

const RestaurantCard = ({ resData }) => {
  const {
    // id,
    name,
    cuisines,
    rating,
    costForTwo,
    deliveryTime,
    imageId,
  } = resData;
  // console.log("IMAGE ID 👉", imageId);


  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt={name}
        src={CDN_URL + imageId}
      />
      {/* <p>{id}</p> */}
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{rating} ⭐</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;
