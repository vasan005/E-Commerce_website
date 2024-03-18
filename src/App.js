import Assets from './components/assets'
import AssetsPopup from './components/assetsPopup'
import Category from './components/catergories'
import EmptyCart from './components/emptyCart'
import Footer from './components/footer'
import Nav from './components/navBar'
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import Wishlist from './components/wishlist'
import Search from './components/search'
import Signup from './components/signUp'
import LandingMain from './components/landingpage/landingMain'
import Login from './components/Login'
import SignUpGuest from './components/SignUpGuest'


const App = () => {
  return (
    <>
      <div className=" w-full h-screen">
       
        <Router>
          

          <Routes>
            <Route path='/landingmain' element={<NavAndFooterMain/>} />
            <Route path='/category' element={<NavAndFooterCategory/>} />
            <Route path='/emptyCart' element={<NavAndFooterCart/>} />
            <Route path='/wishlist' element={<NavAndFooterWishlist/>} />
            <Route path='/search' element={<NavAndFooterSearch/>} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signupguest" element={<SignUpGuest/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path='/assets' element={<NavAndFooterAssets/>} />
            <Route path='/assetsPopup' element={<NavAndFooterAssetspop/>} />
          </Routes>
         
        </Router>

      </div>
    </>
  )
};

const NavAndFooterMain = () => (
  <>
  
    <Nav />
    <LandingMain />
    <Footer />
    
  </>
);

const NavAndFooterAssets = () => (
  <>
  
    <Nav />
    <Assets />
    <Footer />
    
  </>
);

const NavAndFooterCategory = () => (
  <>
  
    <Nav />
    <Category />
    <Footer />
    
  </>
);


const NavAndFooterCart = () => (
  <>
  
    <Nav />
    <EmptyCart />
    <Footer />
    
  </>
);


const NavAndFooterAssetspop = () => (
  <>
  
    <Nav />
    <AssetsPopup />
    <Footer />
    
  </>
);

const NavAndFooterWishlist = () => (
  <>
  
    <Nav />
    <Wishlist />
    <Footer />
    
  </>
);

const NavAndFooterSearch = () => (
  <>
  
    <Nav />
    <Search /> 
    <Footer />
    
  </>
);

export default App