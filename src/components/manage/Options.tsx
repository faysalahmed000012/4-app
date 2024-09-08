import { GoSortDesc } from "react-icons/go";
import AddEditProduct from "./AddEditProduct";

const Options = ({ setFilter, setSort, setLimit }) => {
  return (
    <div className="mx-10 md:flex items-center justify-between gap-6 my-3">
      <div>
        <AddEditProduct isEditMode={false} product={null} />
      </div>
      <div className="w-[80%] md:flex items-center justify-end gap-3">
        <div>
          <form className="max-w-sm mx-auto">
            <label
              htmlFor="sort"
              className="mb-1 block text-lg font-semibold text-gray-900 "
            >
              Sort
            </label>
            <select
              color="green"
              onChange={(e) => setSort(e.target.value)}
              id="sort"
              className="cursor-pointer border border-primary rounded-lg block w-full p-2.5 focus:border-primary focus:ring-primary"
            >
              <option selected>
                {" "}
                <GoSortDesc /> Sort By
              </option>
              <option value="price">Price low to high</option>
              <option value="-price">Price high to low</option>
              <option value="name">Name (a - z)</option>
              <option value="-name">Name (z - a)</option>
            </select>
          </form>
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
              onChange={(e) =>
                setFilter({ name: "category", value: e.target.value })
              }
              id="countries"
              className="cursor-pointer border  rounded-lg block w-full p-2.5 focus:border-primary focus:ring-primary border-primary"
            >
              <option onSelect={() => setFilter({})} value="all" selected>
                Category (All)
              </option>
              <option value="plant">Plant</option>
              <option value="Outdoor Decor">Outdoor Decor</option>
              <option value="Plant Care Essentials">
                Plant Care Essentials
              </option>
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
              className="cursor-pointer border  rounded-lg block w-full p-2.5 focus:border-primary focus:ring-primary border-primary"
            >
              <option selected>10</option>
              <option value={20}>20</option>
              <option value={5}>05</option>
            </select>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Options;
