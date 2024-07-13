import { Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";

export default function Nav() {
  return (
    <Navbar fluid rounded className="bg-transparent ">
      <Navbar.Brand>
        <Link to={"/"}>
          {" "}
          <Logo />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>

        <NavLink to="/manage">Manage</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/cart">Cart</NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
}
