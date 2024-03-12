import React, { useState } from 'react';
import "./landing03.css";
import backgroundImage from "../../image/bg02.svg"
 
const Landing03 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: ''
  });
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform form submission logic here
    console.log('Form Submitted:', formData);
    // Optionally, you can reset the form fields after submission
    setFormData({
      name: '',
      email: '',
      phoneNumber: '',
      message: ''
    });
  };
 
  return (
    <div className="container02">
          <div className="video-main"
        // style={{ backgroundImage: `url(${backgroundImage} )` }}
        >
          <div className='video-contain'>
      <div className="video-container">
        <iframe
          className="video-con"
          src="https://www.youtube.com/embed/hFohqioTAX8?si=a2JOgsry1JWI_Lhz"
          title="Video Player"
        />
      </div>
 
      {/* Right Side Container for Form Submission */}
      <div className="form-container">
        <h1>Tell Us About Your Idea</h1>
        <form onSubmit={handleSubmit} className="form-con">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Your Name"
            className="form-border"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Your Email Id"
            className="form-border"
            required
          />
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Enter Your Mobile Number"
            className="form-border"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="What Design Task Do You Have?"
            className="form-border-long"
            required
          />
          <button type="submit" className="form-btn">
            Submit
          </button>
        </form>
      </div>
      </div>
      </div>
    </div>
  );  
};
 
export default Landing03;