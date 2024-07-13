import { Modal } from "flowbite-react";
import { useState } from "react";
import {
  useAddProductMutation,
  useUpdateProductMutation,
} from "../../redux/api/baseApi";

const AddEditProduct = ({ isEditMode, product }) => {
  const [addProduct] = useAddProductMutation();
  const [editProduct] = useUpdateProductMutation();
  const [openModal, setOpenModal] = useState(false);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    const image = formData.get("image");
    const data = new FormData();
    data.append("image", image!);

    fetch(
      "https://api.imgbb.com/1/upload?key=d3d1d74972071318836f76df468d8eb3",
      {
        method: "POST",
        body: data,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.data) {
          if (isEditMode) {
            const update = {
              ...formProps,
              images: [data?.data?.display_url],
              _id: product._id,
            };
            editProduct(update);
          } else {
            const newProduct = {
              ...formProps,
              images: [data?.data?.display_url],
            };
            addProduct(newProduct);
          }
        }
        setOpenModal(false);
      });
  };
  return (
    <>
      {isEditMode ? (
        <button
          onClick={() => setOpenModal(true)}
          className="bg-green-500 rounded-lg border px-2 py-2 text-white hover:text-green-500 hover:border-green-500 hover:bg-white hover:transition-colors hover:duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
        </button>
      ) : (
        <button
          onClick={() => setOpenModal(true)}
          className="bg-green-500 w-32 h-16 rounded-lg"
        >
          Add Product
        </button>
      )}
      <Modal
        show={openModal}
        size="md"
        popup
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              {isEditMode ? "Update" : "Create New"} Product
            </h3>
            <form onSubmit={handleSubmit} className="p-4 md:p-5">
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Name
                  </label>
                  <input
                    defaultValue={product?.name}
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                    placeholder="Type product name"
                    required={true}
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="price"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Price
                  </label>
                  <input
                    defaultValue={product?.price}
                    type="number"
                    name="price"
                    id="price"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                    placeholder="$2999"
                    required={true}
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="category"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Category
                  </label>
                  <select
                    defaultValue={product?.category}
                    name="category"
                    id="category"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                  >
                    <option selected>Select category</option>
                    <option value="plant">Plant</option>
                  </select>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="quantity"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Quantity
                  </label>
                  <input
                    defaultValue={product?.quantity}
                    type="number"
                    name="quantity"
                    id="quantity"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                    placeholder="29"
                    required={true}
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <p className="block mb-2 text-sm font-medium text-gray-900 ">
                    image
                  </p>
                  <label
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 cursor-pointer"
                    htmlFor="image"
                  >
                    Select Image
                  </label>
                  <input
                    className="hidden"
                    type="file"
                    name="image"
                    id="image"
                  />
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Product Description
                  </label>
                  <textarea
                    defaultValue={product?.description}
                    name="description"
                    id="description"
                    rows={4}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary focus:border-primary"
                    placeholder="Write product description here"
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="text-black inline-flex items-center bg-primary   focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                <svg
                  className="me-1 -ms-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                {isEditMode ? "Update" : "Add new"} product
              </button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddEditProduct;
