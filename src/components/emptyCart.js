import React from 'react'
import "./emptyCart.css"
import cart from "../components/images/icons/36.svg"

const EmptyCart = () => {
  return (
    <div className='empty-cart-container'>
        <div className='empty-cart-heading'>
                <h3>My Cart (0)</h3>
                </div>
        <div className='empty-cart-main'>
            
                <div className='empty-cart-section'>
                    <div className='empty-cart-image'>
                        <img src={cart} />
                        </div>
                        <div className='empty-cart-text'>
                            <h3>Missing Cart Items ?</h3>
                            <p>Login to see the items you added </p>
                            <p1>Login</p1>
                        </div>
                    
                        

                </div>
        </div>

    </div>
  )
}

export default EmptyCart