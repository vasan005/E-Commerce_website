import React, { useState } from 'react';
import "../components/wishlist.css";
import img1 from "../image/001.svg";
import plus from "../image/002.svg";
import tick from "../image/003.svg";
import img2 from "../image/005.svg";
import img3 from "../image/004.svg";
import img4 from "../image/006.svg";
import img5 from "../image/007.svg";

function WishlistCard() {
  const [imgSrc, setImgSrc] = useState(img2);
  const [imgPlus, setImgPlus]= useState(plus);
  
  const handleClick = () => {
    setImgSrc(imgSrc === img2 ? img4 : img2);
  };
  
  const handleClick01 = () => { 
    setImgPlus(imgPlus === plus ? tick : plus);
  };

  return (
    <div className="card-wishlist">
      <div className="box-wishlist">
        <div className='image-wishlist'>
          <img src={img1} alt="Fox"/>
        </div>
        <div className='content-wishlist'>
          <div className='title-wishlist01'>
            <p>Fox</p>
            <img src={imgSrc} alt="food" onClick={handleClick}/>
          </div>
          <div className='title-wishlist02'>
            <img src={img3} alt="vehicle"/>
            <p>200</p>
            <img src={img5} alt="gun"/>
            <h4>400</h4>
          </div>
        </div>
        <div className="icon-wishlist">
          <div className="iconbox-wishlist">
            <img src={imgPlus} alt="Icon" onClick={handleClick01}/>
          </div>
        </div>
      </div>
    </div>
  );
}

function Wishlist() {
  return (
    <div className="container-wishlist">
      <div className='container-wishlist-heading'>
        <h2>Wishlist</h2>
      </div>
      <div className='container-wishlist-main'>
        <WishlistCard/>
        <WishlistCard/>
        <WishlistCard/>
        <WishlistCard/>
        <WishlistCard/>
        <WishlistCard/>
        <WishlistCard/>
        <WishlistCard/>
      </div>
    </div>
  );
}

export default Wishlist;
