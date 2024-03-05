
import React from 'react';
import './navBar.css';
import search from '../components/images/icons/01.svg';
import wishlist from '../components/images/icons/02.svg';
import cart from '../components/images/icons/03.svg';
// import { Link } from 'react-router-dom';


const Nav = () => {
 

    return (
        <div className='navBar-container'>
            <div className='navBar-main'>
                <div className='navBar-heading'>
                    <h3>Corllel</h3>
                </div>
                <div className='navBar-links'>
                    <h3>Home</h3>
                    <h3>Category</h3>
                </div>
                <div className='navBar-icons'>
                    <img src={search} alt="search" />
                    <img src={wishlist} alt="wishlist" />
                    <img src={cart} alt="cart" />
                    <button children={'Login'} />
                </div>


            </div>
        </div>
    );
}

export default Nav;
