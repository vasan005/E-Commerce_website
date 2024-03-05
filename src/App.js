// import { Router } from 'react-router-dom'
import Assets from './components/assets'
import AssetsPopup from './components/assetsPopup'
import Category from './components/catergories'
import EmptyCart from './components/emptyCart'
import Footer from './components/footer'
import Nav from './components/navBar'
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';

const App = () =>
{
  return (
    <>
    <div className=" w-full h-screen">
    <Router>
      <Nav/>
      <Routes>
      {/* <Category/> */}
      <Route path='/' element={<EmptyCart/>}/>
     
      {/* <Route path='/Assets' element={<Assets/>}/>
      <Route path='/AssetsPopup' element={<AssetsPopup/>}/>  */}
      </Routes>
      <Footer/> 
      </Router>
      
      </div>
    </>
  )
}

export default App