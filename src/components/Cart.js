import { useSelector, useDispatch } from "react-redux";
// import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((store) => store.cart.items);

//   const store = useSelector((store)=>store);  <--- It will always update whole store 
//   const cartItems = store.cart.items;   <--- This is less efficient

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleClearItems = ()=>{
    dispatch(clearCart());
  }



  return (
    <div className="text-center m-10 p-10">
      <h1 className="text-2xl font-bold mb-6">Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Cart is empty</p>
      ) : (
        
        <div className="bg-white p-4 rounded-lg shadow">
            
          {cartItems.map((item) => (
            <div
              key={item.card.info.id}
              className="flex justify-between items-center py-3 border-b last:border-b-0"
            >
              {/* Item Name */}
              <span className="font-medium">{item.card.info.name}</span>

              {/* Price */}
              <span className="font-semibold">
                ₹{(item.card.info.price || item.card.info.defaultPrice) / 100}
              </span>

              {/* Image + Button */}
              <div className="w-3/12 relative">
                <button
                  onClick={() => handleAddItem(item)}
                  className="absolute bottom-2 left-1/2 -translate-x-1/2
                  bg-yellow-400 px-4 py-1 rounded-lg shadow-lg font-semibold"
                >
                  Add +
                </button>

                <img
                  src={CDN_URL + item.card.info.imageId}
                  className="w-full rounded-lg"
                  alt={item.card.info.name}
                />
              </div>
              
            </div>
            
          ))}
          <button onClick={handleClearItems}  className="text-red-600 bg-red-300 m-2 py-2 px-4 rounded-full hover:bg-red-500 hover:text-red-200">Clear</button>
        </div>
      )}
      
    </div>
  );
};

export default Cart;
