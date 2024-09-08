import { Button, Table } from "flowbite-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { removeFromCart } from "../redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { TCartItem } from "../types";

const Cart = () => {
  const navigate = useNavigate();
  const cart = useAppSelector((state) => state.cart.products);
  let total;
  if (cart.length > 0) {
    total = cart?.map((c) => c.price).reduce((acc, price) => acc + price);
  }
  const dispatch = useAppDispatch();

  const handleDelete = (item: TCartItem) => {
    dispatch(removeFromCart(item));
    toast.success("Item Removed Successfully");
  };

  useEffect(() => {
    window.onbeforeunload = function () {
      return "Data Will be lost if you refresh the page, Are you sure?";
    };
  }, []);

  if (cart.length < 1) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <h1 className="text-center text-5xl text-gray-500">
          The Cart is Empty!
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-[70vh]">
      <div className="overflow-x-auto">
        <Table className="w-2/3 mx-auto" hoverable>
          <Table.Head>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>Quantity</Table.HeadCell>
            <Table.HeadCell>Actions</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {cart?.map((item) => {
              return (
                <Table.Row
                  key={item._id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white flex items-center">
                    <img
                      className="w-8 h-8 ms-5 me-4"
                      src={item.images[0]}
                      alt={item.name}
                    />
                    {item.name}
                  </Table.Cell>
                  <Table.Cell>${item?.price?.toFixed(2)}</Table.Cell>
                  <Table.Cell>{item?.orderQuantity}</Table.Cell>
                  <Table.Cell>
                    <button
                      onClick={() => handleDelete(item)}
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
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
      <div className="mt-6 mx-auto flex items-center justify-center gap-10">
        <p className="text-xl font-bold">Grand Total : ${total?.toFixed(2)}</p>
        <p className="text-xl font-bold text-gray-500">
          Pay after you receive the product
        </p>
        <Button
          className="bg-primary"
          onClick={() => {
            navigate("/order");
          }}
          pill
        >
          Proceed Checkout
        </Button>
      </div>
    </div>
  );
};

export default Cart;
