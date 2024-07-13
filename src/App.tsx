import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/shared/Footer";
import Nav from "./components/shared/Nav";

function App() {
  return (
    <>
      <Nav />
      <Outlet />
      <div className="mt-auto">
        <Footer />
      </div>
    </>
  );
}

export default App;
