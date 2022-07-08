import React from 'react';
import './Styles/Footer.css'
import close from './Images/X-img.png'

export const Footer = () => {
  return (
    <div className='footer-container'>
        <p>Launch Your Own CBD Business</p>
        <img src={close} alt="" className='close'/>
    </div>
  )
}
