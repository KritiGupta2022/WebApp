import React from 'react'
import './carouselcard.css'
import { children } from 'react'
const Carouselcard = (props) => {
  return (
    <div className='mycard'>
    <img src={props.image} alt='Image-of-card' />
    <span>{props.title}</span>
    <p>{props.text}</p>
    {children}</div>
  )
}

export default Carouselcard