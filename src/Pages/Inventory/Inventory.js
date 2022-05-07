import { async } from "@firebase/util";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ConfirmModal from "../SmallComponents/ConfirmModal/ConfirmModal";
import TableRowItem from "./TableRowItem";

const Inventory = () => {
	const [items, setItems] = useState([]);
	const [confirm, setConfirm] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [id, setId] = useState("");
	useEffect(() => {
		axios
			.get("http://localhost:5000/products")
			.then((data) => setItems(data.data));
	}, []);
	//console.log(confirm);
	//delete opration
	const handleDeleteOparation = (id) => {
		setShowModal(true);
		setId(id);
		// const result = await axios.delete(
		// 	`http://localhost:5000/products/${id}`
		// );
		// console.log(result);
	};
	useEffect(async () => {
		if (confirm) {
			const result = await axios.delete(
				`http://localhost:5000/products/${id}`
			);
			if (result.data.deletedCount) {
				const restData = items.filter((item) => item._id !== id);
				setItems(restData);
				setConfirm(false);
			}
		}
	}, [confirm, id, items]);
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
												handleDeleteOparation={
													handleDeleteOparation
												}
											/>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
			{showModal && (
				<ConfirmModal
					showModal={showModal}
					setShowModal={setShowModal}
					setConfirm={setConfirm}
				/>
			)}
		</div>
	);
};

export default Inventory;
