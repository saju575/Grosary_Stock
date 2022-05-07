import React from "react";

const TableRowItem = (props) => {
	const { name, quantity, price, img, supplierName } = props.item;
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
		</tr>
	);
};

export default TableRowItem;
