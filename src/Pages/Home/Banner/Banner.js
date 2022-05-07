import React from "react";
import "./Banner.css";
const Banner = () => {
	return (
		<div className="banner flex flex-col justify-center items-center">
			<p className="text-center b-l uppercase text-4xl">Grosery Stock</p>
			<p className="text-center text-2xl mt-6 b-p">
				You can never buy too much of a good thing.Don’t throw it, shop
				it!
			</p>
		</div>
	);
};

export default Banner;
