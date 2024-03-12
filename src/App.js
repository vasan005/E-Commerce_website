// import { Router } from 'react-router-dom'
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
import Our3DModels from './components/landingpage/landing02'
import Signup from './components/signUp'
import LandingMain from './components/landingpage/landingMain'
import Login from './components/Login'

const App = () =>
{
  return (
    <>
    <div className=" w-full h-screen">
    <Router>
      <Nav/>
      {/* <Login/> */}
      <Routes>
        <Route path='/landingmain' element={<LandingMain/>}/>
      {/* <Route path='/Our3DModels' element={<Our3DModels/>}/> */}
      <Route path='/category' element={<Category/>}/>
      <Route path='/emptyCart' element={<EmptyCart/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path="/" element={<Signup/>}/>
      {/* <Route path="/login" element={<Login/>}/> */}
     
      <Route path='/assets' element={<Assets/>}/>
      <Route path='/assetsPopup' element={<AssetsPopup/>}/> 
      </Routes>
      <Footer/> 
      </Router>
      
      </div>
    </>
  )
}

export default App