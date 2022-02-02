import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="flex justify-center items-center bg-red-800 drop-shadow-lg py-2 text-white text-xs ">
      <p className="opacity-80">©️{year}, Movie App || Created by Ayan Ansari with 💗</p>
    </div>
  );
};

export default Footer;
