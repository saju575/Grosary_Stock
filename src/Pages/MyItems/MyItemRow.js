import React from "react";

const MyItemRow = (props) => {
	const { _id, name, quantity, price, img, supplierName, userName } =
		props.item;
	const { handleDeleteOparation } = props;
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
				{userName}
			</td>
			<td className="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap">
				<div className="flex items-center justify-evenly mt-3">
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

export default MyItemRow;
