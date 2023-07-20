import React from 'react'
import Cards from './carouselcard.js'
import './carousel.css'
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
        <button className="pre-btn" onClick={btnprev}><p>&lt;</p></button>
        <button className="next-btn" onClick={btnnext}><p>&gt;</p></button>
        <div id="cards-container">
            <Cards title = "Dentist" image = "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dentist@2x.jpg"/>
            <Cards title = "Gynecologist" image = "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dentist@2x.jpg"/>
            <Cards title = "Dietician" image = "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dentist@2x.jpg"/>
            <Cards title = "Physiotherapist" image = "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dentist@2x.jpg"/>
            <Cards title = "General surgeon" image = "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dentist@2x.jpg"/>
            <Cards title = "Orthopedist" image = "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dentist@2x.jpg"/>
            <Cards title = "General Physician" image = "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dentist@2x.jpg"/>
            <Cards title = "Pediatrician" image = "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dentist@2x.jpg"/>
            <Cards title = "Gastroenterologist" image = "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dentist@2x.jpg"/>
        </div>
    </div>
  )
}

export default Carousel