import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import AddProduct from "./Pages/AddProduct/AddProduct";
import Footer from "./Pages/Common/Footer/Footer";
import Navbar from "./Pages/Common/Navbar/Navbar";
import Error from "./Pages/Error/Error";
import Home from "./Pages/Home/Home/Home";
import Inventory from "./Pages/Inventory/Inventory";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import Myitems from "./Pages/MyItems/Myitems";
import SingleItemInfo from "./Pages/SingleItemInfo/SingleItemInfo";
import SoldItems from "./Pages/SoldItems/SoldItems";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>

        <Route
          path="/manageitems"
          element={
            <RequireAuth>
              <Inventory />
            </RequireAuth>
          }
        />
        <Route
          path="/solditems"
          element={
            <RequireAuth>
              <SoldItems />
            </RequireAuth>
          }
        />
        <Route
          path="/inventory/:id"
          element={
            <RequireAuth>
              <SingleItemInfo />
            </RequireAuth>
          }
        />
        <Route
          path="/addProduct"
          element={
            <RequireAuth>
              <AddProduct />
            </RequireAuth>
          }
        />
        <Route
          path="/myaddproducts"
          element={
            <RequireAuth>
              <Myitems />
            </RequireAuth>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
