import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center gap-5">
      <h1>Page not found 404!</h1>
      <Link to="/">
        <div className="py-2 px-10 rounded-xl bg-gradient-to-b transition-all transform duration-200 ease-linear hover:scale-[1.05] from-pink-400 to-pink-600 text-white ">Go to Home</div>
      </Link>
    </div>
  );
};

export default PageNotFound;
