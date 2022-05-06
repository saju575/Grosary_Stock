import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Pages/Common/Footer/Footer";
import Navbar from "./Pages/Common/Navbar/Navbar";
import Home from "./Pages/Home/Home/Home";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />}></Route>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
