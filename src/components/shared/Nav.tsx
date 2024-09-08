import { Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import Logo from "./Logo";

export default function Nav() {
  const cart = useAppSelector((state) => state.cart.products);
  return (
    <Navbar fluid rounded className="z-10 shadow-sm rounded-lg bg-transparent">
      <Navbar.Brand>
        <Link to={"/"}>
          {" "}
          <Logo />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <NavLink
          className={({ isActive }) => (isActive ? "text-primary" : "inactive")}
          to="/manage"
        >
          Manage
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-primary" : "inactive")}
          to="/products"
        >
          Products
        </NavLink>
        <div className="relative">
          {cart.length > 0 && (
            <div className="bg-primary text-white rounded-full w-6 h-6 absolute -top-4 left-8 flex items-center justify-center">
              {cart.length}
            </div>
          )}

          <NavLink
            className={({ isActive }) =>
              isActive ? "text-primary" : "inactive"
            }
            to="/cart"
          >
            Cart
          </NavLink>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}
