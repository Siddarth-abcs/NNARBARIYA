import { Link } from 'react-router-dom';
import { useSelector} from 'react-redux/es/hooks/useSelector';
import './Navbar.css'
import { useDispatch } from 'react-redux';
import { signOutUser } from '../../../redux/actionCreators/authActionCreater';
import logo from "../../AuthComponent/logo.png"

function Navbar() {
  
  const { isAuthenticated, user } = useSelector(state => state.auth);
  const dispatch = useDispatch();




  return (
    <nav>
      {/* <div className="container-a">

        <div className="logo-a">
          <div className="img-a"><img src="https://lh4.googleusercontent.com/5w3beExKwQp5HlTvWUatWSmlKRAl9kwnZIzih5XE9fICiq-0bXa3JK_p6nV4fpi1EzqcD7G4jULcjqy9igl0wOI=w16383" className='narbariya-logo'/></div>
        </div>

       <div className="link-a">
          <div className='btnlinks-a linksa-a'>Project</div>
          <div className='btnlinks-a'>Services</div>
          <div className='btnlinks-a'>About us</div>
          <div className='btnlinks-a'>Contact</div>
        </div> 

        <div className="btns-a">
          <Link to="/" className='btn btn-outline-primary fw-bold' style={{marginRight:"1rem"}}>Home</Link>
          <Link to="/" className='btn btn-outline-primary bg-primary text-light fw-bold' onClick={ () => dispatch(signOutUser())}>Logout</Link>
        </div>
      </div> */}

     <header>
     <div className="container-nav">
        <div className="logo">
        <div className="img"><a className='img' href="https://www.narbariya.rf.gd/narbariya"><img src={logo} className='narbariya-logo'/></a></div>
          <h5 className='business-consultant'>Business Consultant</h5>
        </div>
        <div className="btns">

          {/* <div className="links">
          <li className='btnlinks linksa'><a href="https://www.narbariya.rf.gd/narbariya" target='_blank'>Document</a></li>
          <li className='btnlinks'><a href="https://www.narbariya.rf.gd/services" target='_blank'>Income Tax</a></li>
          <li className='btnlinks'><a href="https://www.narbariya.rf.gd/about-us" target='_blank'>Gst</a></li>
          <li className='btnlinks'><a href="https://www.narbariya.rf.gd/contact" target='_blank'>Roc</a></li>
          </div> */}

          <div className="links">
          Narbariya, based in Delhi, DL, is a top-tier tax consulting firm. Our team of experts, with years of industry experience, provides comprehensive tax solutions to help businesses achieve their financial goals. We have established ourselves as a trusted partner for businesses of all sizes, setting us apart with our commitment to excellence and client satisfaction. Contact us today to see how we can help your business thrive.</div>

        <div className="logout">
        <Link to="/" className='btn btn-outline-primary bg-primary text-light fw-bold' onClick={ () => dispatch(signOutUser())}>Logout</Link>
        </div>
        </div>
      </div>
     </header>
    </nav>
    
  )
}

export default Navbar;
