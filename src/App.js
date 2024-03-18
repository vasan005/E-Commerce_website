// import { Router } from 'react-router-dom'
import Assets from './components/assets'
import AssetsPopup from './components/assetsPopup'
import Category from './components/catergories'
import EmptyCart from './components/emptyCart'
import Footer from './components/footer'
import Nav from './components/navBar'
import LandingCart from "./components/landing02";
import LandingVideo from "./components/landing03";
import Wishlist from "./components/wishlist";
import Search from "./components/search";
import CartList from "./components/cart";
import HistoryList from "./components/profile";




const App = () =>
{
  return (
    <>
    <div className=" w-full h-screen">
    
      <Nav/>
      
        <LandingCart/>
        <LandingVideo/>
        <Wishlist/>
        <Search/>
        <CartList/>
        <HistoryList/>
      <Category/>
     <EmptyCart/>
     
      <Assets/>
      <AssetsPopup/> 
      
      <Footer/> 
      
      
      </div>
    </>
  )
}

export default App