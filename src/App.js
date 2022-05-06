import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Pages/Common/Footer/Footer";
import Navbar from "./Pages/Common/Navbar/Navbar";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/register" element={<Register />}></Route>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
