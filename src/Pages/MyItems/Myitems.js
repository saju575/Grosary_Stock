import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import ConfirmModal from "../SmallComponents/ConfirmModal/ConfirmModal";
import Spinner from "../SmallComponents/Spinner/Spinner";
import MyItemRow from "./MyItemRow";

const Myitems = () => {
	const [items, setItems] = useState([]);
	const [confirm, setConfirm] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [id, setId] = useState("");
	const [user] = useAuthState(auth);
	useEffect(() => {
		axios
			.get(
				`https://intense-wave-00513.herokuapp.com/addedProducts/${user.displayName}`
			)
			.then((data) => setItems(data.data));
	}, [user.displayName]);

	//delete opration
	const handleDeleteOparation = (id) => {
		setShowModal(true);
		setId(id);
	};
	useEffect(async () => {
		if (confirm) {
			const result = await axios.delete(
				`https://intense-wave-00513.herokuapp.com/products/${id}`
			);
			if (result.data.deletedCount) {
				const restData = items.filter((item) => item._id !== id);
				setItems(restData);
				setConfirm(false);
			}
		}
	}, [confirm, id, items]);

	return (
		<div className="container mx-auto py-10" style={{ minHeight: "80vh" }}>
			<h1 className="text-lg uppercase mb-8">My added items</h1>
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
										<th
											scope="col"
											className="text-sm font-bold text-gray-900 px-6 py-4 text-left"
										>
											Username
										</th>
										<th
											scope="col"
											className="text-sm font-bold text-gray-900 px-6 py-4 text-left"
										>
											Delete
										</th>
									</tr>
								</thead>
								{items ? (
									<tbody>
										{items.map((item) => (
											<MyItemRow
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

export default Myitems;
