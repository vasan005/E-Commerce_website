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
import { AuthProvider } from './components/AuthContext';
import HistoryList from './components/profile'
import Payment from './components/payment'


const App = () => {
  return (
    <>
      <div className=" w-full h-screen">
       <AuthProvider>
        <Router>
          

          <Routes>
          <Route path='/' element={<NavAndFooterMain/>} />
            <Route path='/landingmain' element={<NavAndFooterMain/>} />
            <Route path='/category' element={<NavAndFooterCategory/>} />
            <Route path='/emptyCart' element={<NavAndFooterCart/>} />
            <Route path='/wishlist' element={<NavAndFooterWishlist/>} />
            <Route path='/search' element={<NavAndFooterSearch/>} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signupguest" element={<SignUpGuest/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route exact path='/assets/:categoryId' element={<NavAndFooterAssets/>} />
            <Route path='/assetsPopup' element={<NavAndFooterAssetspop/>} />
            <Route path='/profile' element={<NavAndFooterProfile/>} />
            <Route path="/payment" element={<NavAndFooterPayment/>} />

          </Routes>
         
        </Router>
        </AuthProvider>

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


const NavAndFooterProfile = () => (
  <>
  <Nav/>
  <HistoryList/>
  <Footer/>
  </>
)

const NavAndFooterPayment =()=>(
  <>
  <Nav/>
  <Payment/>
  <Footer/>
  </>
)
export default App