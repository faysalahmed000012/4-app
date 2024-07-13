import { useState } from "react";
import Options from "../components/manage/Options";
import Product from "../components/shared/Product";
import { useGetAllProductsQuery } from "../redux/api/baseApi";

const Products = () => {
  const [limit, setLimit] = useState(20);
  const { data } = useGetAllProductsQuery([{ limit }]);
  return (
    <div>
      <h1 className="text-4xl font-semibold my-6">All Products</h1>
      <Options setLimit={setLimit} limit={limit} />
      <div className="grid lg:grid-cols-4 gap-6">
        {data?.data?.products?.map((product) => (
          <div className="mx-auto" key={product._id}>
            {" "}
            <Product product={product} />{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
