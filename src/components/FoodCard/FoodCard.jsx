import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const cartItem = {
    name,
    image,
    price,
    recipe,
    email: user.email,
  };
  const handleAddItemToCart = () => {
    axiosSecure.post("/cart", cartItem);
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">
        ${price}
      </p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4"
            onClick={handleAddItemToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
