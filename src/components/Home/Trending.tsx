import { Pagination } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import arrow from "../../assets/arrow.png";
import useDebounce from "../../hooks/useDebounce";
import { useGetAllProductsQuery } from "../../redux/api/baseApi";
import Options from "../manage/Options";
import Product from "../shared/Product";
import Search from "../shared/Search";

const Trending = () => {
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

  const { data, error, isLoading } = useGetAllProductsQuery(queries);
  console.log(data, error, isLoading);
  const totalPage = data?.data?.meta?.totalPage || 1;
  const onPageChange = (page: number) => setPage(page);
  return (
    <>
      <h1 className="text-4xl font-semibold my-6">Our Products</h1>
      <Search search={search} setSearch={setSearch} />
      <Options setFilter={setFilter} setLimit={setLimit} setSort={setSort} />
      <div className="grid lg:grid-cols-4 gap-6">
        {data?.data?.products?.map((product) => (
          <div className="mx-auto" key={product._id}>
            <Product product={product} />
          </div>
        ))}
      </div>
      <div className="mt-6 mb-6 flex flex-col items-end">
        <p className="font-light">Page : </p>
        <Pagination
          currentPage={page}
          totalPages={totalPage}
          onPageChange={onPageChange}
          showIcons
        />
      </div>
      <Link to={"/products"}>
        <button className="rounded-full w-32 h-12 bg-primary block ms-auto font-semibold hover:bg-transparent hover:border hover:border-primary  hover:transition-all hover:duration-300 ">
          <div className="flex items-center justify-center gap-2 hover:translate-x-2 hover:transition-all hover:duration-300">
            <p> See More</p>
            <img className="h-5" src={arrow} alt="" />
          </div>
        </button>
      </Link>
    </>
  );
};

export default Trending;
