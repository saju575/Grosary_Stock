import { async } from "@firebase/util";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ConfirmModal from "../SmallComponents/ConfirmModal/ConfirmModal";
import Spinner from "../SmallComponents/Spinner/Spinner";
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

	//delete opration
	const handleDeleteOparation = (id) => {
		setShowModal(true);
		setId(id);
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

	//navigate

	const navigate = useNavigate();

	return (
		<div style={{ backgroundColor: "#F7F7F9", minHeight: "80vh" }}>
			<div className="container mx-auto pt-10">
				<div className="flex justify-end">
					<button
						onClick={() => {
							navigate("/addProduct");
						}}
						type="button"
						className="inline-block px-6 py-2.5 bg-purple-600 text-white font-bold text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
					>
						<FontAwesomeIcon
							className="text-xl"
							icon={faSquarePlus}
						></FontAwesomeIcon>{" "}
						<span className="uppercase text-lg">Add product</span>
					</button>
				</div>
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
									{items ? (
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
									) : (
										<Spinner />
									)}
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
