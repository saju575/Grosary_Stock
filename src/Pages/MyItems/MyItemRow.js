import React from "react";

const MyItemRow = (props) => {
	const { _id, name, quantity, price, img, supplierName, username } =
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
				{username}
			</td>
			<td className="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap">
				<button
					onClick={() => {
						handleDeleteOparation(_id);
					}}
					type="button"
				>
					<i className="fa fa-trash-can text-lg text-red-500"></i>
				</button>
			</td>
		</tr>
	);
};

export default MyItemRow;
