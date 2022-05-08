import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
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
	const navigate = useNavigate();
	useEffect(() => {
		const getItems = async () => {
			try {
				await axios
					.get(
						`https://intense-wave-00513.herokuapp.com/addedProducts/${user.email}`,
						{
							headers: {
								authorization: `Bearer ${localStorage.getItem(
									"accessToken"
								)}`,
							},
						}
					)
					.then((data) => {
						setItems(data.data);
					});
			} catch (error) {
				if (
					error.response.status === 401 ||
					error.response.status === 403
				) {
					signOut(auth);
					navigate("/login");
				}
			}
		};
		getItems();
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
			<h1 className="text-lg uppercase mb-8 text-center text-gray-500">
				My added items
			</h1>
			{items?.length ? (
				<div className="flex flex-col">
					<div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
						<div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
							<div className="overflow-x-auto">
								<table className="min-w-full border text-center">
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
												Unit Price
											</th>
											<th
												scope="col"
												className="text-sm font-bold text-gray-900 px-6 py-4 text-center border-r"
											>
												Supplier
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
												Delete
											</th>
										</tr>
									</thead>

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

export default Myitems;
