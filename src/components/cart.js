import React, { useState } from "react";
import "../components/cart.css";
import img1 from "../image/fox.svg";
import img2 from "../image/010.svg";
import img4 from "../image/011.svg";
import img5 from "../image/007.svg";
import img6 from "../image/009.svg";

function CartCard() {
  const [imgSrc, setImgSrc] = useState(img2);

  const handleClick = () => {
    setImgSrc(imgSrc === img4 ? img2 : img4);
  };

  return (
    <div className="card-cart">
      <div className="card-cart-main">
        <div className="card-cart-main-content">
        <div className="image-cart">
          <img src={img1} alt="Fox" />
        </div>
        <div className="content-cart">
          <div className="title-cart01">
            <p>Fox</p>
           
          </div>
          <div className="title-cart02">
            <p>Format:</p>
            <h3>.fbx</h3>
          </div>
          <div className="title-cart03">
            <img src={img5}/>
            <h3>390</h3>
            </div>
            <div className="title-cart04">
            <img src={imgSrc} alt="fav"  onClick={handleClick}/>
            <p>Remove</p></div>
        </div>
        </div>
      </div>
    </div>
  );
}

function OrderCard() {
  return(
    <div className="order-cart">
      <div className="order-item01">
        <h4>Order Value</h4>
        <p>400</p>
      </div>
      <hr/>
      <div className="order-item02">
      <h4>Total</h4>
      <p>400</p>
      </div>
      <div className="checkout">
      <p>Continue to Checkout</p>
    </div>
    </div>
  )
}


function CartList() {
  return (
    <div className="container-cart">
      <div className="main-cart">
        <h2>My Cart</h2>
        <div className="container-cart-main">
          <div className="container-cart-main01">
            <CartCard />
            <hr />
            <CartCard />
           
          </div>
          <div className="container-cart-main02">
            <OrderCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartList;
