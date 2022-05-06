import React from "react";
import { useParams } from "react-router-dom";

const SingleItemInfo = () => {
	const { id } = useParams();
	return <div>SingleItemInfo</div>;
};

export default SingleItemInfo;
