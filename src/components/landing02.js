import React from "react";
import "../components/landing02.css";
import backgroundImage from "../bg_assets/01.png";
import img1 from "../image/001.svg";

const Our3DModels = () => {
  return (
    <div className="container01">
      <div
        className="card-container"
        
       style={{ backgroundImage: `url(${backgroundImage} )` }}
       
      >
        <div className="card-con-heading">
          <div className="card-con01">
            <h1>Our 3D Models</h1>
            <p>view all</p>
          </div>
          <div className="card-con02">
            <div className="card">
              <img src={img1} />
              <p>Animals & Pets</p>
            </div>
            <div className="card">
              <img src={img1} />
              <p>Foods</p>
            </div>
            <div className="card">
              <img src={img1} />
              <p>Plants & Trees</p>
            </div>
            <div className="card">
              <img src={img1} />
              <p>Furniture & Home</p>
            </div>
          </div>
        </div>
      </div>
      <div className="detail-container">
        <div className="detail-con1">
          <h3>500+</h3>
          <p>3D Assets</p>
        </div>
        <div className="detail-con1">
          <h3>400+</h3>
          <p>Downloads</p>
        </div>
        <div className="detail-con1">
          <h3>15+</h3>
          <p>Categories</p>
        </div>
      </div>
    </div>
  );
};

export default Our3DModels;
