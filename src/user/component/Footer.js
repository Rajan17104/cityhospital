import React, { useContext } from 'react';
import Icon from './UI/Icon/Icon';
import { ThemeContext } from '../Context/ThemeContext';

function Footer(props) {

  let theme = useContext(ThemeContext)

  return (
    <>
      <footer id="footer" className={`${theme.theme}`}>
        <div className="container d-md-flex py-4">
          <div className="me-md-auto text-center text-md-start">
            <div>
              <h4>Address</h4>
              <p>
                F-505, <br />
                Inovative Plazza<br />
                New Delhi, India<br /><br />
                <strong>Phone:</strong> +91 9988776655<br />
                <strong>Email:</strong> cityhospital@example.com<br />
              </p>
            </div>
          </div>
          <div className="social-links text-center text-md-right pt-3 pt-md-0">
            <a href="#" className="twitter"><Icon className="bx bxl-twitter" /></a>
            <a href="#" className="facebook"><Icon className="bx bxl-facebook" /></a>
            <a href="#" className="instagram"><Icon className="bx bxl-instagram" /></a>
            <a href="#" className="google-plus"><Icon className="bx bxl-skype" /></a>
            <a href="#" className="linkedin"><Icon className="bx bxl-linkedin" /></a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;