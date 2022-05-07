import React from "react";
import { useNavigate } from "react-router-dom";

const TableRowItem = (props) => {
	const { _id, name, quantity, price, img, supplierName } = props.item;
	const { handleDeleteOparation } = props;
	const navigate = useNavigate();
	const handleBtn = () => {
		navigate(`/inventory/${_id}`);
	};

	return (
		<tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
			<td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
				<img src={img} alt="" className="w-12 h-12" />
			</td>
			<td className="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap">
				{name}
			</td>
			<td className="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap">
				{quantity}
			</td>
			<td className="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap">
				{price}
			</td>
			<td className="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap">
				{supplierName}
			</td>
			<td className="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap">
				<div className="flex items-center justify-evenly mt-3">
					<button
						onClick={handleBtn}
						type="button"
						className="inline-block px-6 py-2.5 bg-yellow-500 text-white  text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out font-bold mx-1"
					>
						stock update
					</button>
					<button
						onClick={handleBtn}
						type="button"
						className="inline-block px-6 py-2.5 bg-purple-600 text-white font-bold text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
					>
						Deliver
					</button>
					<button
						onClick={() => {
							handleDeleteOparation(_id);
						}}
						type="button"
						className="inline-block px-6 py-2.5 bg-red-600 text-white font-bold text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
					>
						Delete
					</button>
				</div>
			</td>
		</tr>
	);
};

export default TableRowItem;
