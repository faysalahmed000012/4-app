import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Footer from "./components/shared/Footer";
import Nav from "./components/shared/Nav";

function App() {
  return (
    <div className="mt-4 mx-[20px] md:mx-[80px]">
      <Nav />
      <Outlet />
      <div className="mt-auto">
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
