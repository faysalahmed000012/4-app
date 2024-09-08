import { Pagination, Table } from "flowbite-react";
import { useState } from "react";
import Options from "../components/manage/Options";
import ProductList from "../components/manage/ProductList";
import Search from "../components/shared/Search";
import useDebounce from "../hooks/useDebounce";
import { useGetAllProductsQuery } from "../redux/api/baseApi";

const Management = () => {
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

  const products = data?.data?.products;

  return (
    <div>
      <h1 className="text-3xl">Manage Products</h1>
      <Search search={search} setSearch={setSearch} />
      <Options setFilter={setFilter} setSort={setSort} setLimit={setLimit} />
      <div className="mt-6">
        <div className="overflow-x-auto">
          <Table hoverable>
            <Table.Head>
              <Table.HeadCell>Name</Table.HeadCell>
              <Table.HeadCell>Price</Table.HeadCell>
              <Table.HeadCell>Category</Table.HeadCell>
            </Table.Head>
            {products?.map((product) => (
              <ProductList key={product._id} product={product} />
            ))}
          </Table>
        </div>
        {/* <div className="flex items-center justify-between bg-white p-2 border-b-[1px] border-gray-200 rounded-lg hover:bg-gray-100">
          <p className="font-semibold ms-6 me-6">Image</p>
          <p className="font-semibold flex-1">name</p>
          <p className="font-semibold flex-1">price</p>
          <p className="font-semibold flex-1">category</p>
          <div className="flex-1 flex gap-3 items-center justify-center">
            <p className="font-semibold">Actions</p>
          </div>
        </div> */}
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

export default Management;
