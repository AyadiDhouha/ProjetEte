import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import './Acceuil.css';
import About from '../../components/about/about'
import Navbar from '../../components/Navbar/Navbar'
const Acceuil = () => {
  
    let history = useHistory()
  return (
    
    <div className='accueil'>
     

        <div className='name'>
          <h1><span>Launch your app</span> with confidence and creativity</h1>
          <div className="sign">
            <a href='/signin' className="singin" onClick={()=>{history.push('/signin')}}>SignIn</a>
            <a href='/signup' className="singup" onClick={()=>{history.push('/signup')}}>SignUp</a>
          </div>

        </div>
     
      
    </div>

  )
}
export default Acceuil;