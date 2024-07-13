// @ts-nocheck
import { Link } from "react-router-dom";
import arrow from "../../assets/arrow.png";
import { useGetAllProductsQuery } from "../../redux/api/baseApi";
import Product from "../shared/Product";

const Trending = () => {
  const { data, error, isLoading } = useGetAllProductsQuery([{ limit: 8 }]);
  console.log(data, error, isLoading);
  return (
    <>
      <h1 className="text-4xl font-semibold my-6">Trending Products</h1>
      <div className="grid lg:grid-cols-4 gap-6">
        {data?.data?.products?.map((product) => (
          <div className="mx-auto" key={product._id}>
            <Product product={product} />
          </div>
        ))}
      </div>
      <Link to={"/products"}>
        <button className="rounded-full w-32 h-12 bg-primary block ms-auto font-semibold hover:bg-transparent hover:border hover:border-primary  hover:transition-all hover:duration-300">
          <div className="flex items-center justify-center gap-2">
            <p> See More</p>
            <img className="h-5" src={arrow} alt="" />
          </div>
        </button>
      </Link>
    </>
  );
};

export default Trending;
