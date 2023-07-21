import React from 'react'
import Cards from './carouselcard.js'
import './carousel.css'
import {FaChevronCircleRight, FaChevronCircleLeft} from 'react-icons/fa'

const Carousel = () => {
    // let box = document.querySelector('.cards-container');
    const btnprev = ()=>{
        var slider = document.getElementById("cards-container");
        slider.scrollLeft -= 500;
    }
    const btnnext = ()=>{
        var slider = document.getElementById("cards-container");
        slider.scrollLeft += 500;
    }
  return (
    <div className="carousel-container">
        <FaChevronCircleLeft size={'30px'} color={'gray'} className="pre-btn" onClick={btnprev}/>
        <FaChevronCircleRight size={'30px'} color={'gray'} className="next-btn" onClick={btnnext} />
        <div id="cards-container">
            
            <Cards 
            title = "Dentist" 
            image = "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dentist@2x.jpg" 
            text="Teething troubles ? Schedule a dental checkup."
            />
            
            <Cards 
            title = "Gynecologist/Obstetrician" 
            image = "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-gynecologist@2x.jpg" 
            text="Explore for women's health, pregnancy and infertility treatments."
            />

            <Cards 
            title = "Dietician" 
            image = "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dietitian@2x.jpg" 
            text="Get guidance on eating right, weight management and sports nutrition."
            />

            <Cards 
            title = "Physiotherapist" 
            image = "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-physiotherapist@2x.jpg" 
            text="Pulled a muscle ? Get it treated by a trained physiotherapist."
            />
            
            <Cards 
            title = "General surgeon" 
            image = "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-general-surgeon@2x.jpg" 
            text="Need to get operated ? Find the right surgeon."
            />
            
            <Cards 
            title = "Orthopedist" 
            image = "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-orthopedist@2x.jpg" 
            text="For Bone and Joints issues, spinal injuries and more."
            />
            
            <Cards 
            title = "General Physician" 
            image = "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-general-doctor@2x.jpg" 
            text="Find the right family doctor in your neighbourhood."
            />
            
            <Cards 
            title = "Pediatrician" 
            image = "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-pediatrician@2x.jpg" 
            text="Child Specialists and Doctors for Infant."
            />
            
            <Cards 
            title = "Gastroenterologist" 
            image = "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-gastroenterologist@2x.jpg" 
            text="Explore for issues realted to digestive system, liver and pancreas."
            />
        </div>
    </div>
  )
}

export default Carousel