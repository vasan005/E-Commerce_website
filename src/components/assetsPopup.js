import React, { useState } from 'react';
import "./assetsPopup.css"
import image from "../components/images/category/27.svg"
import rupee from "../components/images/icons/23.svg"
import img01 from "../components/images/icons/28.svg"
import img02 from "../components/images/icons/29.svg"
import img03 from "../components/images/icons/30.svg"
import plus from "../components/images/icons/32.svg"
import like from "../components/images/icons/31.svg"
import tick from "../components/images/icons/33.svg"
import unlike from "../components/images/icons/34.svg"
import close from "../components/images/icons/35.svg"
import { Link } from 'react-router-dom';

const AssetsPopup = () => {
    const [imgSrc, setImgSrc] = useState(unlike);
    const [imgPlus, setImgPlus] = useState(plus);
    const [selectedFormat, setSelectedFormat] = useState(null); // State to track selected format

    const handleClick = () => {
        setImgSrc(imgSrc === unlike ? like : unlike);
    };

    const handleClick01 = () => {
        setImgPlus(imgPlus === plus ? tick : plus);
    };

    const handleFormatClick = (format) => {
        setSelectedFormat(format === selectedFormat ? null : format);
    };

    return (
        <div id='assets-popup' className='assets-popup-container'>
            <div className='assets-popup-main'>
                <div className='assets-popup-section1'>
                    <img className='assets-popup-image' src={image} alt="Amber Fox" />
                    <h2>Amber Fox</h2>
                </div>
                <div className='assets-popup-section2'>
                    <div className='assets-popup-value'>
                        <img src={rupee} alt="Rupee Symbol" />
                        <h1>390</h1>
                    </div>
                    <div className='assets-popup-description1'>
                        <img src={img01} alt="Secure Payment" />
                        <p>Secure Payment</p>
                    </div>
                    <div className='assets-popup-description1'>
                        <img src={img02} alt="100% Support" />
                        <p>100% Support</p>
                    </div>
                    <div className='assets-popup-description1'>
                        <img src={img03} alt="Access to future version" />
                        <p>Access to future version</p>
                    </div>
                    <div className='assets-popup-buy'>
                       <Link to="/payment"> <p>Buy Now</p></Link>
                        <img src={imgPlus} onClick={handleClick01} alt="Plus" />
                        <img src={imgSrc} alt="Image" onClick={handleClick} />
                    </div>
                    <div className='assets-popup-format'>
                        <h4>Select Format</h4>
                        <div className='assets-popup-format-box1'>
                            <p className={selectedFormat === '.glb/gltf' ? 'selected' : ''} onClick={() => handleFormatClick('.glb/gltf')}>.glb/gltf</p>
                            <p className={selectedFormat === '.fbx' ? 'selected' : ''} onClick={() => handleFormatClick('.fbx')}>.fbx</p>
                            <p className={selectedFormat === '.stl' ? 'selected' : ''} onClick={() => handleFormatClick('.stl')}>.stl</p>
                            <p className={selectedFormat === '.obj' ? 'selected' : ''} onClick={() => handleFormatClick('.obj')}>.obj</p>
                            <p className={selectedFormat === '.ply' ? 'selected' : ''} onClick={() => handleFormatClick('.ply')}>.ply</p>
                            <p className={selectedFormat === '.dae' ? 'selected' : ''} onClick={() => handleFormatClick('.dae')}>.dae</p>
                            <p className={selectedFormat === '.usdz' ? 'selected' : ''} onClick={() => handleFormatClick('.usdz')}>.usdz</p>
                        </div>
                        <div className='assets-popup-format-box2'>
                            <p>Download Size:</p>
                            <h1>32Mb</h1>
                        </div>
                    </div>
                </div>
                <div className='assets-popup-section3'>
                    <Link to="/assets">
                    <img src={close} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AssetsPopup;
