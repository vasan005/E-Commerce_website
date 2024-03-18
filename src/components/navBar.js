import React, { useState } from 'react';
import './navBar.css';
import search from '../components/images/icons/01.svg';
import wishlist from '../components/images/icons/02.svg';
import cart from '../components/images/icons/03.svg';
import { Link, useNavigate } from 'react-router-dom';
import profile from "../image/011.svg";


const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    let navigate = useNavigate(); 

    const routeChange = () => { 
        let path = "/login"; 
        navigate(path);
        
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`navBar-container ${isOpen ? 'open' : ''}`}>
            <div className='navBar-main'>
                <div className='navBar-heading'>
                    <h3>Corllel</h3>
                </div>
                <div className={`navBar-links ${isOpen ? 'open' : ''}`}>
                    <Link to={"/landingmain"}>
                        <h3>Home</h3>
                    </Link>
                    <Link to="/category"><h3>Category</h3></Link>
                </div>
                <div className={`navBar-icons ${isOpen ? 'open' : ''}`}>
                    <Link to="/search">
                        <img src={search} alt="search" />
                    </Link>
                    <Link to="/wishlist">
                        <img src={wishlist} alt="wishlist" />
                    </Link>
                    <Link to="/emptyCart">
                        <img src={cart} alt="cart" />
                    </Link>
                   
                    {/* <img src={profile}/> */}
                    <button onClick={routeChange}>Login</button>
                </div>

                <div className="hamburger-menu" onClick={toggleMenu}>
                    <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                    <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                    <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                </div>
            </div>
        </div>
    );
}

export default Nav;
