import { Button } from "flowbite-react";
// import treePlanting from "../../assets/images/tree-planting.jpg";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo-2.svg";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="lg:mx-10 min-h-[70vh] md:flex md:flex-row-reverse items-center gap-6">
      <div className="flex-1 flex justify-center">
        <img
          style={{ width: "400px", height: "400px" }}
          className=""
          src={logo}
          alt="tree planting image"
        />
      </div>
      <div className="mx-10 flex-1 flex flex-col">
        <h1 className="text-2xl mt-6 md:text-4xl w-[80%] font-semibold">
          Blooming Beginnings: Where Tiny Dreams Take Root
        </h1>
        <p className="text-lg my-5 text-light-black">
          Nurture your little one's wonder with our curated collection of plants
          and décor. From cozy cribs to whimsical mobiles, create a space that
          sparks their imagination and inspires endless possibilities.
        </p>
        <div>
          <Button
            onClick={() => navigate("/products")}
            className="bg-primary text-black hover:border hover:border-primary
            hover:bg-transparent hover:rounded-full hover:transition-all hover:duration-300 hover:ease-in-out hover:scale-105 hover:shadow-primary hover:shadow-lg"
          >
            See All Products
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
