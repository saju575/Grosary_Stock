import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "../SmallComponents/Modal/Modal";

const SingleItemInfo = () => {
	const [item, setItem] = useState([]);
	const [showModal, setShowModal] = useState(false);
	const { id } = useParams();
	const { name, quantity, price, img, supplierName, discription } = item;
	const [values, setValues] = useState({
		deliver: false,
		update: false,
	});
	useEffect(() => {
		const url = `http://localhost:5000/products/${id}`;
		axios.get(url).then((data) => setItem(data.data));
	}, [id]);

	//handle Modal show

	// const handleShowModal = () => {
	// 	setShowModal(true);
	// };
	//handle deleverQuntity
	const handleDeliverQuantity = (quantity) => {
		//setShowModal(true);
		console.log("deliver", parseInt(quantity));
	};
	const handleUpdateStock = (quantity) => {
		//setShowModal(true);
		console.log("update", parseInt(quantity));
	};

	return (
		<div className="container py-20 mx-auto " style={{ minHeight: "80vh" }}>
			<div class="flex justify-center">
				<div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
					<img
						class=" w-full  md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
						src={img}
						alt="productimg"
					/>
					<div class="p-6 flex flex-col justify-start">
						<h5 class="text-gray-900 text-xl  mb-2 font-bold">
							{name}
						</h5>
						<p class="text-gray-700 text-base mb-4">
							{discription}
						</p>
						<p class="text-gray-700 text-base mb-4">
							Brand : {supplierName}
						</p>
						<p class="text-gray-600 text-sm pt-2">
							Quantity : {quantity}
						</p>
						<p class="text-gray-600 text-sm pt-2">
							Unit Price : {price}
						</p>
						<div className="flex items-center justify-between mt-3">
							<button
								onClick={() => {
									setShowModal(true);
									setValues({ update: true, deliver: false });
								}}
								type="button"
								class="inline-block px-6 py-2.5 bg-yellow-500 text-white  text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out font-bold"
							>
								stock update
							</button>
							<button
								onClick={() => {
									setShowModal(true);
									setValues({ update: false, deliver: true });
								}}
								type="button"
								class="inline-block px-6 py-2.5 bg-red-600 text-white font-bold text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
							>
								Deliver
							</button>
						</div>
					</div>
				</div>
			</div>
			{values.deliver ? (
				<Modal
					handleDeliverQuantity={handleDeliverQuantity}
					showModal={showModal}
					setShowModal={setShowModal}
				></Modal>
			) : (
				<Modal
					handleDeliverQuantity={handleUpdateStock}
					showModal={showModal}
					setShowModal={setShowModal}
				></Modal>
			)}
		</div>
	);
};

export default SingleItemInfo;
