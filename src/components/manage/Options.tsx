// @ts-nocheck
import AddEditProduct from "./AddEditProduct";

const Options = ({ setLimit, limit }) => {
  return (
    <div className="flex items-center justify-between my-3">
      <div>
        <form className="max-w-sm mx-auto">
          <label
            htmlFor="sort"
            className="block mb-1 text-lg font-semibold text-gray-900 "
          >
            Sort
          </label>
          <select
            id="sort"
            className="bg-primary cursor-pointer border-none text-sm rounded-lg block w-full p-2.5 "
          >
            <option selected>Sort By</option>
            <option value="price">Price</option>
            <option value="stock">Stock</option>
            <option value="name(a-z)">Name (a - z)</option>
            <option value="name(z-a)">Name (z - a)</option>
          </select>
        </form>
      </div>
      <div>
        <AddEditProduct isEditMode={false} product={null} />
      </div>
      <div>
        <form className="max-w-sm mx-auto">
          <label
            htmlFor="countries"
            className="block mb-1 text-lg font-semibold text-gray-900 "
          >
            Filter
          </label>
          <select
            id="countries"
            className="bg-primary  cursor-pointer border-none text-sm rounded-lg block w-full p-2.5"
          >
            <option selected>Filter</option>
            <option value="inStock">In Stock</option>
            <option value="outStock">Out of Stock</option>
          </select>
        </form>
      </div>
      <div>
        <form className="max-w-sm mx-auto">
          <label
            htmlFor="limit"
            className="block mb-1 text-lg font-semibold text-gray-900 "
          >
            Limit
          </label>
          <select
            onChange={(e) => setLimit(e.target.value)}
            id="limit"
            className="bg-primary  cursor-pointer border-none text-sm rounded-lg block w-full p-2.5"
          >
            <option selected>10</option>
            <option value={20}>20</option>
            <option value={5}>05</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default Options;
