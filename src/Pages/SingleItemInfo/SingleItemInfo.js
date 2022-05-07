import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleItemInfo = () => {
	const [item, setItems] = useState([]);
	const { id } = useParams();
	useEffect(() => {
		const url = ``;
	}, []);
	return <div>SingleItemInfo</div>;
};

export default SingleItemInfo;
