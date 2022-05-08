import axios from "axios";
import React, { useEffect, useState } from "react";
import ConfirmModal from "../SmallComponents/ConfirmModal/ConfirmModal";
import Spinner from "../SmallComponents/Spinner/Spinner";
import SoldSingleItem from "./SoldSingleItem";

const SoldItems = () => {
	const [products, setProducts] = useState([]);
	const [confirm, setConfirm] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [id, setId] = useState("");
	useEffect(async () => {
		await axios
			.get("https://intense-wave-00513.herokuapp.com/soldProducts")
			.then((data) => {
				setProducts(data.data);
				console.log(data);
			});
	}, []);
	//delete item
	const handleDeleteOparation = (id) => {
		setShowModal(true);
		setId(id);
	};
	useEffect(async () => {
		if (confirm) {
			const result = await axios.delete(
				`https://intense-wave-00513.herokuapp.com/soldProducts/${id}`
			);
			if (result.data.deletedCount) {
				const restData = products.filter((item) => item._id !== id);
				setProducts(restData);
				setConfirm(false);
			}
		}
	}, [confirm, id, products]);
	return (
		<div className="container mx-auto py-12" style={{ minHeight: "80vh" }}>
			<h2 className="uppercase sm:text-2xl font-bold mb-14 text-center text-gray-500">
				Sold product details
			</h2>
			{products?.length ? (
				<div className="flex flex-col">
					<div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
						<div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
							<div className="overflow-x-auto">
								<table className="min-w-full border ">
									<thead className="border-b">
										<tr>
											<th
												scope="col"
												className="text-sm font-bold text-gray-900 px-6 py-4 text-center border-r"
											>
												Image
											</th>
											<th
												scope="col"
												className="text-sm font-bold text-gray-900 px-6 py-4 text-center border-r"
											>
												Name
											</th>
											<th
												scope="col"
												className="text-sm font-bold text-gray-900 px-6 py-4 text-center border-r"
											>
												Quantity
											</th>
											<th
												scope="col"
												className="text-sm font-bold text-gray-900 px-6 py-4 text-center border-r"
											>
												Email
											</th>
											<th
												scope="col"
												className="text-sm font-bold text-gray-900 px-6 py-4 text-center border-r"
											>
												Username
											</th>
											<th
												scope="col"
												className="text-sm font-bold text-gray-900 px-6 py-4 text-center border-r"
											>
												Date
											</th>
											<th
												scope="col"
												className="text-sm font-bold text-gray-900 px-6 py-4 text-center border-r"
											>
												Time
											</th>
											<th
												scope="col"
												className="text-sm font-bold text-gray-900 px-6 py-4 text-center border-r"
											>
												Delete
											</th>
										</tr>
									</thead>

									<tbody>
										{products.map((item) => (
											<SoldSingleItem
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
			) : (
				<Spinner />
			)}
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

export default SoldItems;
