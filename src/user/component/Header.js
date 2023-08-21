import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from './UI/Button/Button';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { ThemeContext } from '../Context/ThemeContext';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import { logoutRequest } from '../Redux/action/auth.action';


// import './App.css'

function Header({ count }) {


  let auth = useSelector(state => state.auth)
  console.log(auth);
  let dispatch = useDispatch()

  let theme = useContext(ThemeContext)
  console.log(theme);



  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

  const cartData = useSelector((state) => state.cart)

  console.log(cartData);

  let cartCount = 0;

  if (cartData.items) {
    cartCount = cartData.items.reduce((acc, v, i) => acc + v.qty, 0)
  }

  const favouriteState = useSelector(state => state.favourites);
  console.log(favouriteState);

  const handleremove = () => {
    // localStorage.removeItem('logindata');
    dispatch(logoutRequest())
  }


  function toggleMenu() {
    document.getElementById("fixed-top").classList.toggle('showHide')
  }

  return (

    <div className={`main-header ${theme.theme}`}>
      <div id="topbar" className={`d-flex align-items-center fixed-top ${theme.theme}`}>
        <div className="container d-flex justify-content-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-envelope " /> <a href={`mailto:contact@example.com${theme.theme}`}>cityhospital@example.com</a>
            <i className="bi bi-phone" /> +91 9988776655
          </div>  

          <div className="d-none d-lg-flex social-links align-items-center">
            <a href="#" className="twitter"><i className="bi bi-twitter" /></a>
            <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
            <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
            <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>

            <Link to="/cart">
              <IconButton aria-label={`cart ${theme.theme}`} style={{}}>
                <StyledBadge badgeContent={cartCount} color="secondary">
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton >
            </Link>

            {/* <Link to="/cart1">
              <IconButton aria-label="cart" style={{}}>
                <StyledBadge badgeContent={count} color="secondary">
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton >
            </Link> */}

            <Link to='/favorite'>
              <FavoriteIcon aria-label="cart" style={{ color: 'red' }}>
                <StyledBadge badgeContent={{}} color="secondary">
                  <ShoppingCartIcon />
                </StyledBadge>
              </FavoriteIcon >
            </Link>

            <Brightness6Icon onClick={() => theme.themeToggle(theme.theme)} style={{ marginLeft: '10px' }} />

            {/* <button onClick={() => theme.themeToggle(theme.theme)} >Toggle</button> */}

          </div>
        </div>
      </div>
      <header id="header" className={`fixed-top ${theme.theme}`}>
        <div className="container d-flex align-items-center ">
          <div className="logo">
            <Link to="/">
              <h1 className="logo me-auto">City</h1><br />
              <h2 className="logo-tiny-text me-auto">Multispeciality Hospital</h2>
            </Link>
          </div>
          <nav id="navbar" className="navbar order-last order-lg-0 ">
            <ul>
              <li><Link className="nav-link scrollto active" to='/'>Home</Link></li>
              {/* <li><Link className="nav-link scrollto" to='/departments'>Departments</Link></li> */}
              <li><Link className="nav-link scrollto" to='/department'>Department</Link></li>
              <li><Link className="nav-link scrollto" to='/doctors'>Doctors</Link></li>
              <li><Link className="nav-link scrollto" to='/about'>About</Link></li>
              <li><Link className="nav-link scrollto" to='/contact'>Contact</Link></li>
              {/* <li><Link className="nav-link scrollto" to='/validation'>Validation Form</Link></li> */}
              {/* <li><Link className="nav-link scrollto" to='/dropdown'>Dropdown</Link></li> */}
              <li><Link className="nav-link scrollto" to='/medicine'>Medicine</Link></li>
              <li><Link className="nav-link scrollto" to='/memocounter'>Memo</Link></li>
              
              {/* <li><Link className="nav-link scrollto" to='/medicine1'>Medicine1</Link></li> */}
              {/* <li><Link className="nav-link scrollto" to='/counter'>Counter</Link></li>*/}
              {/* <li><Link className="nav-link scrollto" to='/counter1'>Counter</Link></li>  */}
              {/* <li><Link className="nav-link scrollto" to='/favorite'>My Favorite</Link></li> */}


            </ul>
            <i className="bi bi-list mobile-nav-toggle" />

            {/* <i className="bi bi-list mobile-nav-toggle" onClick={toggleMenu}/> */}
          </nav>
          <Link to='/appointment' >
            {/* <span className="d-none d-md-inline">Make an</span> */}
            <Button>Appointment</Button>
          </Link>

          {
            auth.user ?
              <Link to="/auth" onClick={handleremove}>
                <Button>Logout</Button>
              </Link> :

              <Link to="/auth" >
                <Button>Login/Signup</Button>
              </Link>
          }


        </div>
      </header>
    </div>
  );
}

export default Header;