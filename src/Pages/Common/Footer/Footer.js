import React from "react";

const Footer = () => {
	return (
		<div className=" text-white" style={{ background: "#2F384A" }}>
			{/* <div className="py-10 flex sm:flex-row flex-col justify-between container mx-auto md:px-16 gap-8 px-2">
				<div className="flex flex-col justify-start">
					<img className="w-40 md:w-56" src="img/educator1.png"></img>
					<p className="md:w-80">Best plece for lean and supprot .</p>
				</div>
				<div className="flex flex-col justify-start">
					<p className="text-2xl">Contact us</p>
					<p>
						<i className="fa-solid fa-envelope"></i>
						{"  "}
						help.educator@pixelshow.com
					</p>
					<p>
						<i className="fa-solid fa-location-dot"></i>
						{"  "} 69 Queen St, Bangladesh
					</p>
					<p>
						<i className="fa-solid fa-phone"></i>
						{"  "} +7 (928)-123-45-45
					</p>
				</div>
			</div> */}
			<div className="flex justify-center py-8 border-t-2">
				<p>
					© {new Date().getFullYear()} Grosery Stock, All Rights
					Reserved
				</p>
			</div>
		</div>
	);
};

export default Footer;
