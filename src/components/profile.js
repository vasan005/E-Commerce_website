import React, { useState } from "react";
import "../components/profile.css";
import img1 from "../image/profilefox.svg";
import img5 from "../image/007.svg";
import { useAuth } from './AuthContext'; 
import { Link, useNavigate } from 'react-router-dom';


function HistoryCard() {
  return (
    <div className="card-profile">
      <div className="card-profile-main">
        <div className="card-profile-main-content">
        <div className="image-profile">
          <img src={img1} alt="Fox" />
        </div>
        <div className="content-profile">
          <div className="title-profile01">
            <p>Fox</p>
           
          </div>
          <div className="title-profile02">
            <p>Purchased On:</p>
            <h3>27 June 2023</h3>
          </div>
          <div className="title-profile03">
            <img src={img5}/>
            <h3>390</h3>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
}


function ProfileCard() {
    const [showPopup, setShowPopup] = useState(false); // State for managing popup visibility
    const { logout } = useAuth(); 
    let navigate = useNavigate(); 

    const routeChange = () => { 
        let path = "/login"; 
        navigate(path);
        
    };
  
    const handleDeleteAccount = () => {
      setShowPopup(true); // Show popup when delete account button is clicked
    };
  
    const handleLogout = () => {
      // Call logout function to perform logout action
      logout();
      // Redirect user to login page or perform any other necessary actions
      // Example: history.push('/login');
    };
  return(
    <div className="user-profile">
      <div className="profile-item01">
        <h4>Name</h4>
        <p>Hardik</p>
      </div>
      <div className="profile-item01">
        <h4>Email</h4>
        <p>Hardikpandya@gmail.com</p>
      </div>
      <div className="profile-item01">
        <h4>Phone Number</h4>
        <p>6382138575</p>
      </div>
      <div className="profile-item02">
        <p onClick={handleDeleteAccount} >Delete Account</p>
        {showPopup && (
        <div className="popup" >
          <div className="popup-content" >
            <h3>Are you sure you want to delete your account?</h3>
            <div className="popup-btn">
            <button on Click={() => setShowPopup(false)}>Delete</button>
            <button >Cancel</button>
        </div>
          </div>
        </div>
      )}
        <button  onClick={() => {routeChange(); handleLogout();}}>Log Out</button>
      </div>
      {showPopup && <div className="backdrop"></div>} {/* Backdrop */}
    </div>
  )
}


function HistoryList() {
  
  return (
    <div className="container-profile">
      <div className="main-profile01">
      <div className="main-heading-profile">
        <h2>Purchase History</h2>
        <h2>User Details</h2></div>
        <div className="container-profile-main">
          <div className="container-profile-main01">
            <HistoryCard/>
            <hr />
            <HistoryCard />
           
          </div>
          <div className="main-profile02">
          <div className="container-profile-main02">
            <ProfileCard/>
          </div>
        </div>
      </div>
      </div>
     
    </div>
  );
}

export default HistoryList;