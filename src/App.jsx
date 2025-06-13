import React from 'react'
import './App.css'
import Header from './components/Navbar/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Work from './components/Work/Work'
import SuperFlyDetail from './components/Work/SuperFlyDetail'
import SofatutorDetail from './components/Work/SofatutorDetail'
import OthersDetail from './components/Work/OthersDetail'
import Layout from './components/Home/Layout'
import RealContact from './components/Contact/RealContact'
import ScrollToTop from './ScrollToTop'

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/work' element={<Work />} />
        <Route path='/superfly-detail' element={<SuperFlyDetail />} />
        <Route path='/sofatutor-detail' element={<SofatutorDetail />} />
        <Route path='/others-detail' element={<OthersDetail />} />
        <Route path='/realContact' element={<RealContact />} />
      </Routes>
    </Router>
  )
}

export default App