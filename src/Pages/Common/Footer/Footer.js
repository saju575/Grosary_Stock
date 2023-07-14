import React from "react";

const Footer = () => {
  return (
    <div className=" text-white" style={{ background: "#2F384A" }}>
      <div className="flex justify-center py-8 border-t-2">
        <p>
          &copy; {new Date().getFullYear()} Grosery Stock, All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
