import {
  faCartFlatbed,
  faSquarePlus,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
        <img src={img} alt="" className="w-12 h-12" />
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap border-r">
        {name}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap border-r">
        {quantity}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap border-r">
        {price}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap border-r">
        {supplierName}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap border-r">
        <div className="flex items-center justify-evenly mt-3">
          <button onClick={handleBtn} type="button">
            <FontAwesomeIcon
              className=" text-gray-500 text-3xl -mt-2"
              icon={faSquarePlus}
            />
          </button>
        </div>
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap border-r">
        <button onClick={handleBtn} type="button">
          <FontAwesomeIcon
            className="text-gray-500 text-xl"
            icon={faCartFlatbed}
          />
        </button>
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap border-r">
        <button
          onClick={() => {
            handleDeleteOparation(_id);
          }}
          type="button"
        >
          <FontAwesomeIcon className="text-red-400" icon={faTrashCan} />
        </button>
      </td>
    </tr>
  );
};

export default TableRowItem;
