import React from 'react'
import login from './login.css'

import { Link } from "react-router-dom"

import LoginForm from '../../../components/AuthComponent/LoginForm'

const Login = () => {
  return (
   <div className='container-fluid'>
    {/* <h1 className='display-1 my-5 text-center'>Login Here</h1> */}
    <div className='row'>
        <div className='col-md-5 mx-auto mt-5'>
            <LoginForm/>
            {/* <Link to="/register">
            <a href="https://www.narbariya.rf.gd/contact">Click Herw</a>
            </Link> */}
        </div>
    </div>
   </div>
  )
}

export default Login;