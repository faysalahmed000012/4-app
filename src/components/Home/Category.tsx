import img from "../../assets/images/plant-1.jpg";

const Category = () => {
  return (
    <div>
      <h1 className="text-4xl font-semibold my-6">Our Product Categories</h1>
      <div className="grid lg:grid-cols-3 gap-6 justify-items-center">
        <div className="bg-secondary flex flex-col items-center justify-center h-[200px] border-black border-2 w-[80%] rounded-lg">
          <img className="w-24 h-24 rounded-full" src={img} alt="plant" />
          <p className="font-semibold mt-3">Plants</p>
        </div>
        <div className="bg-secondary flex flex-col items-center justify-center h-[200px] border-black border-2 w-[80%] rounded-lg">
          <img
            className="w-24 h-24 rounded-full"
            src="https://i.ibb.co/8NLbjbZ/Bird-nest.jpg"
            alt="plant"
          />
          <p className="font-semibold mt-3">Outdoor Decor</p>
        </div>
        <div className="bg-secondary flex flex-col items-center justify-center h-[200px] border-black border-2 w-[80%] rounded-lg">
          <img
            className="w-24 h-24 rounded-full"
            src="https://i.ibb.co/RhKTBW5/fertilizer.jpg"
            alt="plant"
          />
          <p className="font-semibold mt-3">Plant Care Essentials</p>
        </div>
      </div>
    </div>
  );
};

export default Category;
