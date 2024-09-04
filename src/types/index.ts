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
  number: number;
};
