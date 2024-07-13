// @ts-nocheck
import { useState } from "react";
import Options from "../components/manage/Options";
import ProductList from "../components/manage/ProductList";
import { useGetAllProductsQuery } from "../redux/api/baseApi";

const Management = () => {
  const [limit, setLimit] = useState(10);
  const { data } = useGetAllProductsQuery([{ limit }]);
  return (
    <div>
      <h1 className="text-3xl">Manage Products</h1>
      <Options setLimit={setLimit} limit={limit} />
      <div className="mt-6">
        {data?.data?.products?.map((product) => (
          <ProductList key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Management;
