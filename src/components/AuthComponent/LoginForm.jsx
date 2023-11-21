import React from 'react'
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { signInUser } from '../../redux/actionCreators/authActionCreater';
import LoginFormStyle from './LoginForm.scss';
import logo from "./logo.png"
 
function LoginForm () {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [success, setSuccess] = React.useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!email || !password){
      ("fill all fields");
      return;
    }

    dispatch(signInUser(email,password,setSuccess));
    
  }

  React.useEffect(() => {
    if(success){
        navigate("/dashboard")
    }
},[success])


  return (
    // <form autoComplete='off' onSubmit={handleSubmit}>
    //     <div className="form-group my-2">
    //         <input type="email"
    //         name='email'
    //         className='form-control'
    //         placeholder='email'
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)} />
    //     </div>
    //     <div className="form-group my-2">
    //         <input type="password"
    //         name='password'
    //         classNasme='form-control'
    //         placeholder='password'
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)} />
    //     </div>
    //     <button type='submit' className='btn btn-primary my-2 form-control'>Login</button>
    // </form>
    
  <div className="align" >
<div className="grid align__item">

  <div className="register">

    {/* <svg xmlns="http://www.w3.org/2000/svg" className="site__logo" width="56" height="84" viewBox="77.7 214.9 274.7 412"><defs><linearGradient id="a" x1="0%" y1="0%" y2="0%"><stop offset="0%" stop-color="#8ceabb"/><stop offset="100%" stop-color="#378f7b"/></linearGradient></defs><path fill="url(#a)" d="M215 214.9c-83.6 123.5-137.3 200.8-137.3 275.9 0 75.2 61.4 136.1 137.3 136.1s137.3-60.9 137.3-136.1c0-75.1-53.7-152.4-137.3-275.9z"/></svg> */}

    <img className="site__logo" width="240" height="75px" src={logo} alt="" />
    <h2>Sign In</h2>

    <form action="" autoComplete='off' onSubmit={handleSubmit} className="form">

      <div class="form__field">
        <input type="email" placeholder="USERNAME"
        name='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}></input>
      </div>

      <div class="form__field">
        <input type="password" placeholder="PASSWORD"
        name='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}></input>
      </div>

      <div class="form__field">
        <input type="submit" value="Log In"></input>
      </div>

    </form>

    <p>IF YOU DON`T HAVE ID PASSWORD CONTACT <b className='narbariya_name'>NARBARIYA</b> <br />+91 9315718735 <br />office.narbariya@gmail.com</p>

  </div>
</div>
</div>
  )
}


export default LoginForm;

