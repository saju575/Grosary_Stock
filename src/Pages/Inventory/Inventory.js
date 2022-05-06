import axios from "axios";
import React, { useEffect, useState } from "react";

const Inventory = () => {
	const [items, setItems] = useState([]);
	useEffect(() => {
		axios.get("data.json").then((data) => setItems(data.data));
	}, []);
	return <div>This is Inventory</div>;
};

export default Inventory;
