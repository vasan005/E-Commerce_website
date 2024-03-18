import React from 'react'
import "../components/categories.css"
import fox from "../components/images/category/04.svg"
import food from "../components/images/category/05.svg"
import tree from "../components/images/category/06.svg"
import furniture from "../components/images/category/07.svg"
import vehicle from "../components/images/category/08.svg"
import foxIcon from "../components/images/category/09.svg"
import foodIcon from "../components/images/category/10.svg"
import treeIcon from "../components/images/category/11.svg"
import furnitureIcon from "../components/images/category/12.svg"
import vehicleIcon from "../components/images/category/13.svg"
import search from "../components/images/icons/01.svg"
import { Link } from 'react-router-dom'
const Category = () => {
    return (
        <div className='cat-container'>
            <div className='cat-main'>
                <div className='cat-search'>
                    <span class="search-icon"><img src={search} /></span>
                    <input type="text"
                        placeholder='Search'
                        className='search-border'
                    />
                </div>
                <h2 className='cat-heading'>Explore Store Categories - Buy Professional 3D Models</h2>
                <div className='cat-image'>
                <Link to={"/assets"}>
                    <div className='cat-icons'>
                        <div className='icon-container'>
                            <img className='cat-icon-main' src={fox} />
                            <img className='cat-icon-active' src={foxIcon} />
                            <div className='icon-text'>Animals & Pets</div>
                        </div>
                    </div></Link>
                    <div className='cat-icons'>
                        <div className='icon-container'>
                            <img className='cat-icon-main' src={food} />

                            <img className='cat-icon-active' src={foodIcon} />
                            <div className='icon-text'>Foods</div>

                        </div>
                    </div>
                   
                    <div className='cat-icons'>
                        <div className='icon-container'>
                            <img className='cat-icon-main' src={tree} />
                            <img className='cat-icon-active' src={treeIcon} />
                            <div className='icon-text'>Trees & Plants</div>
                        </div>
                    </div>
                    <div className='cat-icons'>
                        <div className='icon-container'>
                            <img className='cat-icon-main' src={furniture} />
                            <img className='cat-icon-active' src={furnitureIcon} />
                            <div className='icon-text'>Furniture & Home</div>
                        </div>
                    </div>
                    <div className='cat-icons'>
                        <div className='icon-container'>
                            <img className='cat-icon-main' src={vehicle} />
                            <img className='cat-icon-active' src={vehicleIcon} />
                            <div className='icon-text'>Vehicle</div>
                        </div>
                    </div>

                </div>
                <div className='cat-image'>
                    <div className='cat-icons'>
                        <div className='icon-container'>
                            <img className='cat-icon-main' src={fox} />
                            <img className='cat-icon-active' src={foxIcon} />
                            <div className='icon-text'>Animals & Pets</div>
                        </div>
                    </div>
                    <div className='cat-icons'>
                        <div className='icon-container'>
                            <img className='cat-icon-main' src={food} />

                            <img className='cat-icon-active' src={foodIcon} />
                            <div className='icon-text'>Foods</div>

                        </div>
                    </div>
                    <div className='cat-icons'>
                        <div className='icon-container'>
                            <img className='cat-icon-main' src={tree} />
                            <img className='cat-icon-active' src={treeIcon} />
                            <div className='icon-text'>Trees & Plants</div>
                        </div>
                    </div>
                    <div className='cat-icons'>
                        <div className='icon-container'>
                            <img className='cat-icon-main' src={furniture} />
                            <img className='cat-icon-active' src={furnitureIcon} />
                            <div className='icon-text'>Furniture & Home</div>
                        </div>
                    </div>
                    <div className='cat-icons'>
                        <div className='icon-container'>
                            <img className='cat-icon-main' src={vehicle} />
                            <img className='cat-icon-active' src={vehicleIcon} />
                            <div className='icon-text'>Vehicle</div>
                        </div>
                    </div>

                </div>
                <div className='cat-image'>
                    <div className='cat-icons'>
                        <div className='icon-container'>
                            <img className='cat-icon-main' src={fox} />
                            <img className='cat-icon-active' src={foxIcon} />
                            <div className='icon-text'>Animals & Pets</div>
                        </div>
                    </div>
                    <div className='cat-icons'>
                        <div className='icon-container'>
                            <img className='cat-icon-main' src={food} />

                            <img className='cat-icon-active' src={foodIcon} />
                            <div className='icon-text'>Foods</div>

                        </div>
                    </div>
                    <div className='cat-icons'>
                        <div className='icon-container'>
                            <img className='cat-icon-main' src={tree} />
                            <img className='cat-icon-active' src={treeIcon} />
                            <div className='icon-text'>Trees & Plants</div>
                        </div>
                    </div>
                    <div className='cat-icons'>
                        <div className='icon-container'>
                            <img className='cat-icon-main' src={furniture} />
                            <img className='cat-icon-active' src={furnitureIcon} />
                            <div className='icon-text'>Furniture & Home</div>
                        </div>
                    </div>
                    <div className='cat-icons'>
                        <div className='icon-container'>
                            <img className='cat-icon-main' src={vehicle} />
                            <img className='cat-icon-active' src={vehicleIcon} />
                            <div className='icon-text'>Vehicle</div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Category;