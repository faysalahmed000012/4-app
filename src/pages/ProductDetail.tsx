import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../redux/api/baseApi";
import { addToCart } from "../redux/features/cartSlice";
import { useAppDispatch } from "../redux/hooks";

const ProductDetail = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetProductByIdQuery(id!);
  const dispatch = useAppDispatch();
  const handleAddToCart = () => {
    const name = data?.data?.name;
    const price = data?.data?.price;
    const images = data?.data?.images;
    const _id = data?.data?._id;
    dispatch(addToCart({ _id, name, price, images, quantity: 1 }));
  };
  return (
    <div>
      <div className="my-6 min-h-[70vh] flex flex-col  bg-transparent rounded-lg md:flex-row md:w-full gap-12">
        <div className="">
          <img
            style={{ width: "600px" }}
            className="w-full "
            src={data?.data?.images[0]}
            alt="product"
          />
        </div>
        <div className="h-full md:max-w-[900px] p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {data?.data?.name}
          </h5>
          <p className="mb-3 font-normal text-gray-700">
            {data?.data?.description}
          </p>
          <div className="flex gap-6">
            <button
              onClick={handleAddToCart}
              className="bg-primary rounded-lg w-32 h-12 block font-semibold hover:bg-transparent hover:border hover:border-primary  hover:transition-all hover:duration-300"
            >
              Add To Cart
            </button>
            <button className="bg-red-400 rounded-lg w-32 h-12 block font-semibold hover:bg-transparent hover:border hover:border-red-400  hover:transition-all hover:duration-300">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
