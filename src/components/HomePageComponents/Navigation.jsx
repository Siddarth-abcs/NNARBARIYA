
import { Link } from 'react-router-dom';

import { useSelector} from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { signOutUser } from '../../redux/actionCreators/authActionCreater';
import './Navigation.css'

import React, { useState } from "react";



function NavigationComponent() {
  const { isAuthenticated, user } = useSelector(state => state.auth);

  const dispatch = useDispatch();

  function burger() {
    var btnMenu = document.querySelector(".btn-menu");
    if (btnMenu.style.display === "none") {
      btnMenu.style.display = "block"; // or "inline" or any other valid display value
    } else {
      btnMenu.style.display = "none";
    }
  }
  

  return (
    <>
    <div style={{backgroundColor:"#FFFFFF"}}>
<div className="header">
  <h1>Narbariya</h1>
  
</div>

<div className="colunm ">

  <div className="parta col-3 col-s-3 menu" >
    <ul>
      {isAuthenticated ? (
      <>
      <li className='fw-bold'>Hello! <span>{user.displayName}</span></li>
      <li className='fw-bold'><a href="https://www.narbariya.rf.gd/narbariya" target='_blank'>Our Website</a></li>
      <li><Link to="/dashboard" className="text-primary fw-bold">Dashboard</Link></li>
      <li className='fw-bold' onClick={ () => dispatch(signOutUser())}>Logout</li>
      </>
      ):(
        <>
        <li className='fw-bold'><Link className='login-link' to="/login">Login</Link></li>
        <li className='fw-bold'><Link className='login-link' to='' >Dashboard</Link></li>
        </>
      )
}
    </ul>
  </div>

  <div className='narbariya'>
    <h1>Narbariya</h1>
    <p>Narbariya is a top-tier tax consulting firm based in Delhi, DL. Our team of experts provides comprehensive tax solutions to help businesses achieve their financial goals. 

With years of experience in the industry, we have established ourselves as a trusted partner for businesses of all sizes. Our commitment to excellence and client satisfaction sets us apart from the rest. Contact us today to see how we can help your business thrive .</p>
  </div>

  <div className="">

    <div className="aside" >
      <h2>Audit</h2>
      <p>An audit is an "independent examination of financial information of any entity .</p>
      <h2>Gst</h2>
      <p>The Goods and Services Tax (GST) is a successor to VAT used in India on the supply of goods and services .</p>
      <h2>Income Tax</h2>
      <p>Income tax in India is governed by Entry 82 of the Union List of the Seventh Schedule to the Constitution of India .</p>
     
    </div>
  </div>
</div>

<div className="footer footer-fixed">
  <p>Resize the browser window to see how the content responds to the resizing.</p>
</div>
</div>

    </>
  )
}
export default NavigationComponent;
