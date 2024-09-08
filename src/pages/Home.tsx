import Category from "../components/Home/Category";
import Gallery from "../components/Home/Gallery";
import Hero from "../components/Home/Hero";
import Trending from "../components/Home/Trending";

const Home = () => {
  return (
    <>
      <Hero />
      <Category />
      <Trending />
      <Gallery />
    </>
  );
};

export default Home;
