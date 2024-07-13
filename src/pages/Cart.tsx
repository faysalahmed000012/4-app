import { removeFromCart } from "../redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const Cart = () => {
  const cart = useAppSelector((state) => state.cart.products);
  const dispatch = useAppDispatch();
  const handleDelete = (item) => {
    dispatch(removeFromCart(item));
  };

  return (
    <div>
      {cart.map((c) => {
        return (
          <div className="flex items-center justify-between bg-white p-2 border-b-[1px] border-gray-200 rounded-lg">
            <img className="w-8 h-8 ms-5 me-4" src={c.images[0]} alt={c.name} />
            <p className="flex-1">{c.name}</p>
            <p className="flex-1">{c.price.toFixed(2)}</p>
            <p className="flex-1">{c.quantity}</p>
            <div className="flex-1 flex gap-3 items-center justify-center">
              <button
                onClick={() => handleDelete(c)}
                className="bg-red-500 border rounded-lg px-2 py-2 text-white hover:text-red-500 hover:border-red-500 hover:bg-white hover:transition-colors hover:duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
