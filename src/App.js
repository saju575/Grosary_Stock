import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Pages/Common/Footer/Footer";
import Navbar from "./Pages/Common/Navbar/Navbar";
import Home from "./Pages/Home/Home/Home";
import Inventory from "./Pages/Inventory/Inventory";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import SingleItemInfo from "./Pages/SingleItemInfo/SingleItemInfo";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/register" element={<Register />}></Route>
				<Route
					path="/inventory"
					element={
						<RequireAuth>
							<Inventory />
						</RequireAuth>
					}
				></Route>
				<Route
					path="/inventory/:id"
					element={
						<RequireAuth>
							<SingleItemInfo />
						</RequireAuth>
					}
				></Route>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
