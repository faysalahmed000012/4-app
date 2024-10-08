import { Badge } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addToCart } from "../../redux/features/cartSlice";
import { useAppDispatch } from "../../redux/hooks";

const Product = ({ product }) => {
  const navigate = useNavigate();
  const { _id, name, price, category, images, quantity, rating } = product;
  const dispatch = useAppDispatch();
  const arr1 = new Array(Math.floor(rating | 1)).fill("*");
  const handleAddToCart = () => {
    if (quantity == 0) {
      toast.error("This Product is Out of Stock");
    } else {
      dispatch(addToCart({ ...product }));
    }
  };
  return (
    <div
      onClick={() => navigate(`/product/${_id}`)}
      className="w-full max-w-sm rounded-lg cursor-pointer"
      title="View Details"
    >
      <img
        className="p-8 rounded-t-lg w-96 h-64"
        src={images[0]}
        alt="product image"
      />
      <div className="px-5 pb-5">
        <p className="text-2xl font-semibold tracking-tight text-gray-900 ">
          {name} ({category})
        </p>
        <Badge
          className={`${
            quantity > 0 ? "bg-green-500" : "bg-red-500"
          } text-white py-1 rounded-full inline`}
        >
          {quantity > 0 ? "In Stock" : "Out of Stock"}
        </Badge>
        <div className="flex items-center mt-2.5 mb-5">
          {rating && (
            <>
              <div className="flex items-center space-x-1 rtl:space-x-reverse">
                {arr1.map(() => {
                  return (
                    <svg
                      className="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  );
                })}
              </div>
              <span className="bg-secondary text-black text-xs font-semibold px-2.5 py-0.5 rounded ms-3">
                {rating?.toFixed(1)}
              </span>
            </>
          )}

          {quantity == 0 && <p className="ms-3 text-red-500">Out of Stock</p>}
        </div>
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex items-center justify-between"
        >
          <span className="text-3xl font-bold text-gray-900">
            ${price?.toFixed(2)}
          </span>
          <button
            disabled={quantity == 0}
            onClick={handleAddToCart}
            className={`text-gray-600 bg-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:bg-gray-400 shadow-xl `}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
