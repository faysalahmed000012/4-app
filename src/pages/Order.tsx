import { Button, Card, Label, Textarea, TextInput } from "flowbite-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useCreateOrderMutation } from "../redux/api/baseApi";
import { clearCart } from "../redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const Order = () => {
  const cartItems = useAppSelector((state) => state.cart.products);
  const dispatch = useAppDispatch();
  const [createOrder] = useCreateOrderMutation();
  const navigate = useNavigate();

  const handleOrder = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      name: { value: string };
      phone: { value: string };
      address: { value: string };
    };
    const order = {
      items: [...cartItems],
      user: {
        name: target.name.value,
        phone: target.phone.value,
        address: target.address.value,
      },
    };
    createOrder(order);
    dispatch(clearCart());
    toast.success("Order Created");
    navigate("/");
  };

  return (
    <div className="min-h-[70vh]">
      <div className="h-full flex flex-col items-center justify-center w-[70%] mx-auto">
        <Card className="md:w-[30%]">
          <form onSubmit={handleOrder} className="flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Your Name" />
              </div>
              <TextInput id="name" type="text" placeholder="Name" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="phone" value="Your Phone Number" />
              </div>
              <TextInput
                id="phone"
                type="text"
                placeholder="Your Phone Number"
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="address" value="Your Address" />
              </div>
              <Textarea
                id="address"
                placeholder="Your Address"
                required
                rows={4}
              />
            </div>

            <Button className="bg-primary" type="submit">
              Confirm
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Order;
