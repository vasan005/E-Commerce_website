import React, { useState } from "react";
import "./payment.css";

const Payment = () => {
  const [selectedNumber, setSelectedNumber] = useState(null);

  const handleClick = (number) => {
    setSelectedNumber(number);
  };

  return (
    <div className="payment-container">
      <div className="payment-main">
        <div className="payment-section1">
          <div  className="payment-section1-div1">
          <h1
            className={selectedNumber === 1 ? "selected" : ""}
            onClick={() => handleClick(1)}>
            1</h1>
            <h2>Billing Address</h2>
            
         </div>
          <hr />
          <div className="payment-section1-div1">
          <h1
            className={selectedNumber === 2 ? "selected" : ""}
            onClick={() => handleClick(2)}
          >
            2
          </h1>
          <h2>Payment</h2>
          
          </div>
        </div>
        <div className="payment-section2">
          <div className="payment-section2-div1">
            <button className="payment-button">Buy as Guest</button>
          </div>
          <div className="payment-section2-div2">
            <div className="billing-form-heading">
              <h1>Billing Address</h1>
              <hr />
            </div>
            <div className="billing-form-content">
              <div className="billing-row">
                <div className="billing-form-group">
                  <label htmlFor="firstName" className="bill-form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="bill-input"
                  />
                </div>

                <div className="billing-form-group">
                  <label htmlFor="lastName" className="bill-form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="bill-input"
                  />
                </div>
              </div>

              <div className="billing-form-group">
                <label htmlFor="addressLine1" className="bill-form-label">
                  Address Line 1
                </label>
                <input
                  type="text"
                  id="addressLine1"
                  name="addressLine1"
                  className="bill-input"
                />
              </div>

              <div className="billing-form-group">
                <label htmlFor="addressLine2" className="bill-form-label">
                  Address Line 2
                </label>
                <input
                  type="text"
                  id="addressLine2"
                  name="addressLine2"
                  className="bill-input"
                />
              </div>

              <div className="billing-row">
                <div className="billing-form-group">
                  <label htmlFor="country" className="bill-form-label">
                    Country
                  </label>
                  <select id="country" name="country"  className="bill-input-select">
                    
                    <option className="bill-input" value="">Select Country</option>
                    {/* Add options for countries */}
                    
                  </select>
                </div>

                <div className="billing-form-group">
                  <label htmlFor="region" className="bill-form-label">
                    Region/Province
                  </label>
                  <input
                    type="text"
                    id="region"
                    name="region"
                    className="bill-input"
                  />
                </div>
              </div>

              <div className="billing-row">
                <div className="billing-form-group">
                  <label htmlFor="city" className="bill-form-label">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    className="bill-input"
                  />
                </div>

                <div className="billing-form-group">
                  <label htmlFor="zipcode" className="bill-form-label">
                    Zip Code
                  </label>
                  <input
                    type="text"
                    id="zipcode"
                    name="zipcode"
                    className="bill-input"
                  />
                </div>
              </div>

              <div className="billing-form-button">
                <button type="button" className="billing-button">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
