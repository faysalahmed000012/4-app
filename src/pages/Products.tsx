import { Pagination } from "flowbite-react";
import { useState } from "react";
import Options from "../components/manage/Options";
import Product from "../components/shared/Product";
import Search from "../components/shared/Search";
import useDebounce from "../hooks/useDebounce";
import { useGetAllProductsQuery } from "../redux/api/baseApi";

const Products = () => {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("-CreatedAt");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState({ name: "", value: "" });

  const searchValue = useDebounce(search);
  const queries = [
    { name: "limit", value: limit },
    { name: "page", value: page },
    { name: "searchTerm", value: searchValue },
    { name: "sort", value: sort },
    filter,
  ];

  const { data } = useGetAllProductsQuery(queries);

  const totalPage = data?.data?.meta?.totalPage || 1;
  const onPageChange = (page: number) => setPage(page);

  return (
    <div>
      <h1 className="text-4xl font-semibold my-6">All Products</h1>
      <Search search={search} setSearch={setSearch} />
      <Options setFilter={setFilter} setSort={setSort} setLimit={setLimit} />
      <div className="grid lg:grid-cols-4 gap-6">
        {data?.data?.products?.map((product) => (
          <div className="mx-auto" key={product._id}>
            {" "}
            <Product product={product} />{" "}
          </div>
        ))}
      </div>
      <div className="mt-6 flex flex-col items-end">
        <p className="font-light">Page : </p>
        <Pagination
          currentPage={page}
          totalPages={totalPage}
          onPageChange={onPageChange}
          showIcons
        />
      </div>
    </div>
  );
};

export default Products;
