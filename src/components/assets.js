import React, { useState } from 'react';
import "./assets.css";
import search from "../components/images/icons/01.svg";
import fox from "../components/images/category/fox.svg";
import like from "../components/images/icons/20.svg";
import unlike from "../components/images/icons/24.svg";
import plus from "../components/images/icons/25.svg";
import tick from "../components/images/icons/26.svg";
import download from "../components/images/icons/21.svg";
import rupee from "../components/images/icons/23.svg";
import { Link } from 'react-router-dom';

const AssetsCard = () => {
    const [imgSrc, setImgSrc] = useState(unlike);
    const [imgPlus, setImgPlus] = useState(plus);


    const handleClick = () => {
        setImgSrc(imgSrc === unlike ? like : unlike);
    };

    const handleClick01 = () => {
        setImgPlus(imgPlus === plus ? tick : plus);
    };





    return (
        <div className="card-assets">
            <div className="box-assets">
                <div className='image-assets' >
                    {/* <Link to="/assetsPopup"> */}
                        <img src={fox} /> 
                        {/* </Link> */}
                </div>
                <div className='content-assets'>
                    <div className='title-assets01'>
                        <p>Fox</p>
                        <img src={imgSrc} alt="Image" onClick={handleClick} />
                    </div>
                    <div className='title-assets02'>
                        <img src={download} />
                        <p>200</p>
                        <img src={rupee} />
                        <h4>400</h4>
                    </div>
                </div>
                <div className="icon-assets">
                    <div className="iconbox-assets">
                        <img src={imgPlus} onClick={handleClick01} />
                    </div>
                </div>
            </div>

        </div>
    );
};

function Assets() {
    return (
        <div className="container-assets">
            <div className='assets-main'>
                <div className='assets-search'>
                    <span className="assets-search-icon"><img src={search} /></span>
                    <input type="text"
                        placeholder='Search'
                        className='assets-search-border'
                    />
                </div>
                <h2 className='assets-heading'>Explore Store Categories - Buy Professional 3D Models</h2>
            </div>
            <div className='assets-main-container'>
                <AssetsCard />
                <AssetsCard />
                <AssetsCard />
                <AssetsCard />
                <AssetsCard />
                <AssetsCard />
                <AssetsCard />
                <AssetsCard />
            </div>
        </div>
    );
}

export default Assets;
