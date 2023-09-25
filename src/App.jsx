import React from 'react'
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// impporting Compomnents 
import Navbar from "../Components/Nvabar/Navbar";
import Banner from '../Components/Banner/Banner';
import Hero from '../Components/Hero/Hero';
import Menu from '../Components/Menu/Menu';
import Footer from '../Components/Footer/Footer';
import Section1 from '../Components/Section1/Section1'


const App = () => {
  return (

<>
<Navbar />
<Banner />
<Hero />
<Section1 />
<Menu />
<Footer />



</>



  )
}

export default App