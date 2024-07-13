import logo from "../../assets/images/logo-2.svg";

const Logo = () => {
  return (
    <>
      <span className="self-center whitespace-nowrap text-xl font-semibold">
        <img className="w-10 h-10" src={logo} alt="" />
        <span className="text-primary">Green</span> Horizon
      </span>
    </>
  );
};

export default Logo;
