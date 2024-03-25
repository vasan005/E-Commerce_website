import React from "react";
import "./homeLeft.css"
import {Link , useNavigate} from "react-router-dom"

function HomeLeft() {
  const navigate=useNavigate();

  const handleBuyNowClick = () => {
   
    navigate("/payment");
  };
  

  return (
    <div className="left-home-content flex flex-col  h-screen bg-[black] pr-[250px] pt-[100px] p-5">
      <div className="content text-white mb-5 left-[0%] flex flex-col content-center">
        <p className="para1 bg-gradient-to-r from-red-500 to-orange-500 inline-block text-transparent bg-clip-text text-2xl my-4 ">Discover, Explore & buy 3D Character</p>
        <p className="para2 text-6xl mt-4 mb-8 text-center">Lorem ipsum dolor sit<br />amet consectetur.</p>
        <p className="para3 text-xl mt-4 mb-8 text-center">
          Lorem ipsum dolor sit amet consectetur.<br />Adipiscing etiam odio etiam
          vitae dictum
        </p>
      </div>
      <div className="button-container flex justify-center ">
        <button onClick={handleBuyNowClick} className="centered-button text-[white] bg-gradient-to-r from-red-500 to-orange-500 cursor-pointer mb-[180px] px-5 py-2.5 rounded-[9px] border-[none]">Buy Now</button>
      </div>
    </div>
  );
}

export default HomeLeft;