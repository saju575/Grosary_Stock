import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "../../SmallComponents/Spinner/Spinner";
import Item from "../Item/Item";

const TopItems = () => {
	const [items, setItems] = useState([]);
	useEffect(() => {
		axios
			.get("http://localhost:5000/products?size=6")
			.then((data) => setItems(data.data));
	}, []);

	return (
		<div className="container mx-auto py-12">
			<h2 className="text-left pb-8 font-bold uppercase text-2xl pl-12">
				Top items
			</h2>
			{items ? (
				<div className="px-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto">
					{items.map((item) => (
						<Item key={item._id} item={item} />
					))}
				</div>
			) : (
				<Spinner />
			)}
		</div>
	);
};

export default TopItems;
