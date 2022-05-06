import axios from "axios";
import React, { useEffect, useState } from "react";
import Item from "../Item/Item";

const TopItems = () => {
	const [items, setItems] = useState([]);
	useEffect(() => {
		axios.get("data.json").then((data) => setItems(data.data));
	}, []);

	return (
		<div className="container mx-auto pt-12">
			<h2 className="text-left pb-8 font-bold uppercase text-2xl pl-12">
				Top items
			</h2>
			<div className="px-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto">
				{items.map((item) => (
					<Item key={item._id} item={item} />
				))}
			</div>
		</div>
	);
};

export default TopItems;
