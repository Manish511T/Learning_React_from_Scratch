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
    <div className="m-4 p-4 w-70 rounded-lg shadow-lg bg-gray-100 hover:bg-gray-200 hover:shadow-2xl hover:border border-gray-300" >
      <img
        className="rounded-lg"
        alt={name}
        src={CDN_URL + imageId}
      />
      {/* <p>{id}</p> */}
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{rating} ⭐</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};



//Higher Order Component
// Input -  RestaurantCard => RestaurantCArdPromoted

export const withPromotedLabel = (RestaurantCard)=>{
  return(props)=>{
    return (
      <div className="relative">
        <label className="absolute bg-yellow-300 text-black/80  px-2 py-1 rounded-md">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    )
  }
}



export default RestaurantCard;
