import React from 'react'

import { Outlet, Route, Routes } from 'react-router-dom'
import Footer from './compunent/Footer'
import Header from './compunent/Header'
import ScrollToTop from './compunent/ScrollToTop'
// import About from './Pages/About/About'
// import Blog from './Pages/About/Blog'
// import Protfolio from './Pages/About/Protfolio'
// import Contact from './Pages/Contact'
// // import protfolio from './Pages/About/Protfolio'
// import Home from './Pages/Home'
// import Pricing from './Pages/Pricing'
// import Bpo_Services from './Pages/services/Bpo_Services'
// import Digital_Marketing from './Pages/services/Digital_Marketing'
// import Mobile_Services from './Pages/services/Mobile_Services'
// import Software_Services from './Pages/services/Software_Services'
// // import Software_Services from './Pages/services/Software_Services'
// import Web_Services from './Pages/services/Web_Services'

const Index = () => {
  return (
   <>
   <ScrollToTop/>
   <Header/>
   
    <Outlet/>

    <Footer/>
   </>
  )
}

export default Index