import React, { useState } from 'react';
import "../components/search.css";
import img1 from "../image/001.svg";
import plus from "../image/002.svg"
import tick from "../image/003.svg";
import img2 from "../image/005.svg";
import img3 from "../image/004.svg";
import img4 from "../image/006.svg";
import img5 from "../image/007.svg"; 
import img6 from "../image/008.svg";
function SearchCard() {
    const [imgSrc, setImgSrc] = useState(img4);
    const [imgPlus, setImgPlus]= useState(plus);
    
    const handleClick = () => {
      setImgSrc(imgSrc === img4 ? img2 : img4);
    };
    const handleClick01 = () => { 
      setImgPlus(imgPlus === plus ? tick : plus);
    };
   
  
    return (
      
      <div className="card-search" >
        <div className="box-search">
          <div className='image-search'>
            <img src={img1}/>
          </div>
          <div className='content-search'>
            <div className='title-search01'>
              <p>Fox</p>
              <img src={imgSrc} alt="Image" onClick={handleClick}/>
            </div>
            <div className='title-search02'>
              <img src={img3}/>
              <p>200</p>
              <img src={img5}/>
              <h4>400</h4>
            </div>
          </div>
          <div className="icon-search">
            <div className="iconbox-search">
              <img src={imgPlus} onClick={handleClick01}/>
            </div>
          </div>
        
        </div>
      </div>
      
    );
  }
  
  function Search() {
    const [searchValue, setSearchValue] = useState("");
  
    const handleCancel = () => {
      setSearchValue(""); // Clear the search field
    };
  
    const handleChange = (event) => {
      setSearchValue(event.target.value); // Update search field value
    };
  
    return (
      <div className="container-search">
        <div className='search-main'>
          <div className='search-search'>
            <span className="search-search-icon">
              <img src={img6} alt="Search Icon"/>
            </span>
            <input 
              type="text"
              placeholder='Search'
              className='search-search-border'
              value={searchValue}
              onChange={handleChange}
            />
          </div>
          <div className='container-search-button'>
            <p onClick={handleCancel}>Cancel</p>
          </div>
        </div>
        <div className='container-search-main'>
          <SearchCard/>
          <SearchCard/>
          <SearchCard/>
          <SearchCard/>
          <SearchCard/>
          <SearchCard/>
          <SearchCard/>
          <SearchCard/>
        </div>
      </div>
    );
  }
  
  export default Search;