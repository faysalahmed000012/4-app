// @ts-nocheck
import { useGetAllProductsQuery } from "../../redux/api/baseApi";

const Gallery = () => {
  const { data } = useGetAllProductsQuery([{ name: "limit", value: 12 }]);
  return (
    <div>
      <h1 className="text-4xl font-semibold my-6">Showcase</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {data?.data?.products?.map((product) => {
          return (
            <div key={product._id}>
              <img
                className="h-auto max-w-full rounded-lg md:h-[440px] md:w-[569px]"
                src={product.images[0]}
                alt={product.name}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
