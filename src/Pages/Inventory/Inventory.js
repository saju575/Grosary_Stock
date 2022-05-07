import axios from "axios";
import React, { useEffect, useState } from "react";
import TableRowItem from "./TableRowItem";

const Inventory = () => {
	const [items, setItems] = useState([]);
	useEffect(() => {
		axios
			.get("http://localhost:5000/products")
			.then((data) => setItems(data.data));
	}, []);
	return (
		<div style={{ backgroundColor: "#F7F7F9", minHeight: "80vh" }}>
			<div className="container mx-auto pt-10">
				<div className="flex flex-col">
					<div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
						<div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
							<div className="overflow-x-auto">
								<table className="min-w-full">
									<thead className="border-b">
										<tr>
											<th
												scope="col"
												className="text-sm font-bold text-gray-900 px-6 py-4 text-left"
											>
												Image
											</th>
											<th
												scope="col"
												className="text-sm font-bold text-gray-900 px-6 py-4 text-left"
											>
												Name
											</th>
											<th
												scope="col"
												className="text-sm font-bold text-gray-900 px-6 py-4 text-left"
											>
												Quantity
											</th>
											<th
												scope="col"
												className="text-sm font-bold text-gray-900 px-6 py-4 text-left"
											>
												Unit Price
											</th>
											<th
												scope="col"
												className="text-sm font-bold text-gray-900 px-6 py-4 text-left"
											>
												Supplier
											</th>
										</tr>
									</thead>
									<tbody>
										{items.map((item) => (
											<TableRowItem
												key={item._id}
												item={item}
											/>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Inventory;
