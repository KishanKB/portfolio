import './App.css';

import Contact from './Components/Contact/Contact';
import Experience from './Components/Experience/Experience';
import Footer from './Components/Footer/Footer';
import Intro from './Components/Intro/Intro';
import Navbar from './Components/Navbar/Navbar';
import Portfolio from './Components/Portfolio/Portfolio';
import Services from './Components/Services/Services';
import Testimonial from './Components/Testimonials/Testimonial';
import Works from './Components/Works/Works';
//import { useContext } from 'react';
//import  themeContext  from "./Context";

function App() {
 
  return (

      <div>

        <Navbar/>
        <Intro/>
        <Services/>
        <Experience/>
        <Works/>
        <Portfolio/>
        <Testimonial/>
        <Contact/>
        <Footer/>
      
      </div>

  )
}

export default App;
