export type TProduct = {
  _id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  images: [string];
  ratings: number;
  quantity: number;
  isDeleted: boolean;
};

export type TCartItem = TProduct & {
  orderQuantity: number;
};

export type TOrder = {
  items: TCartItem[];
  user: {
    name: string;
    phone: string;
    address: string;
  };
};
