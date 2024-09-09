import { BiSolidCategory } from "react-icons/bi";
import { FaStar } from "react-icons/fa6";
import { IoIosPricetags } from "react-icons/io";
import { IoCubeSharp } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useGetProductByIdQuery } from "../redux/api/baseApi";
import { addToCart } from "../redux/features/cartSlice";
import { useAppDispatch } from "../redux/hooks";

const ProductDetail = () => {
  const { id } = useParams();
  const { data } = useGetProductByIdQuery(id!);
  const dispatch = useAppDispatch();
  const handleAddToCart = () => {
    if (data?.data?.quantity == 0) {
      toast.error("This Product is Out of Stock");
    } else {
      dispatch(addToCart({ ...data?.data }));
    }
  };
  return (
    <div>
      <div className="mt-24 my-6 min-h-[70vh] flex flex-col  bg-transparent rounded-lg md:flex-row md:w-full gap-12">
        <div className="">
          <img
            style={{ width: "600px" }}
            className="w-full rounded-lg"
            src={data?.data?.images[0]}
            alt="product"
          />
        </div>
        <div className="h-full md:max-w-[50%] p-4 leading-normal">
          <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900">
            {data?.data?.name}
          </h5>
          <p className="flex items-center justify-start gap-3">
            <BiSolidCategory /> Category : {data?.data?.category}
          </p>
          <p className="flex items-center justify-start gap-3">
            {" "}
            <FaStar /> Ratings : {data?.data?.rating?.toFixed(1)}/5
          </p>
          <p className="flex items-center justify-start gap-3">
            {" "}
            <IoIosPricetags /> Price : ${data?.data?.price?.toFixed(2)}
          </p>
          <p className="flex items-center justify-start gap-3">
            {" "}
            <IoCubeSharp /> Stock : {data?.data?.quantity}
          </p>
          <p className="mt-3 mb-3 text-lg font-normal text-gray-700">
            <span className="font-bold">Description :</span>{" "}
            {data?.data?.description}
          </p>
          <div className="flex gap-6">
            {data?.data && (
              <button
                disabled={data?.data?.quantity == 0}
                onClick={handleAddToCart}
                className="bg-primary rounded-lg w-32 h-12 block font-semibold hover:bg-transparent hover:border hover:border-primary  hover:transition-all hover:duration-300"
              >
                Add To Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
