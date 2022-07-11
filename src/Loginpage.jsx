import React from 'react';
import './Styles/Loginpage.css'
import icon1 from './Images/Login-icon.png'
import icon2 from './Images/Login-name.png'

export const Loginpage = () => {
  return (
    <div className='loginpage-container'>
      <div className='logo'>
        <img src={icon1} alt="" />
        <img src={icon2} alt="" />
      </div>
      <br /><br />
      <p className='email-text'>Email</p>
      <br />
      <hr />
      <br />
      <p className='email-text'>Password</p>
      <br />
      <hr />
      <p className='forget-text'>Forget your password?</p>
      <br /><br />
      <button className='enter-btn'>Enter</button>
    </div>
  )
}