import React, { useRef, useState } from "react";
import "./Login.css";
import login from "../image/signup.svg";
import { BASE_URL } from "../constant";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      // Make an API call to login with email and password
      const response = await fetch(BASE_URL + "users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // If login is successful, navigate to landing page or perform further actions
        navigate("/landingmain");
        console.log("Login successful!"); 
        // Alert for successful login
      } else {
        // If login fails, extract error message from backend response and display it
        const responseData = await response.json(); // Parse response body as JSON
        const errorMessage = responseData.message; // Extract error message
        window.alert(errorMessage); // Display error message in alert
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <main className="login-main">
      <div className="right-login">
        <img src={login} alt="BgImage" className="login-fill-image"></img>
      </div>
      <div className="left-login">
        <div className="login-form">
          <div className="login-heading">
            <h1>Login</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="login-form-field">
              <label htmlFor="email" className="login-form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="login-form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="login-form-field">
              <label htmlFor="password" className="login-form-label">
                Your Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="login-form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="loginform-final-button">
              <button type="submit" className="login-submit-button">
                Login
              </button>
              {/* Google Sign In Button */}
              {/* Add your Google Sign In button here */}
            </div>
            <div className="login-form-final-div">
              <p>Don't have an account?</p>
              <Link to={"/signup"}>
                <h3>SignUp</h3>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
