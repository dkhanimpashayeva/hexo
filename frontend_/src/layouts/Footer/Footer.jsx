import React from "react";
import "./Footer.scss";
import {Link} from "react-router-dom"
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillHeart,
} from "react-icons/ai";
import { FiFacebook, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-4">
            <h4>ABOUT THE HEXA TEMPLATE</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus et dolor blanditiis consequuntur ex voluptates
              perspiciatis omnis unde minima expedita.
            </p>
            <ul className="d-flex list-unstyled align-items-center icons-footer">
              <li>
                <AiOutlineInstagram />
              </li>
              <li>
                <FiFacebook />
              </li>
              <li>
                <FiLinkedin />
              </li>
              <li>
                <AiOutlineTwitter />
              </li>
            </ul>
          </div>
          <div className="col-4">
            <h4>Contact Us</h4>
            <ul className="list-unstyled">
              <li>
                <p>Address:</p>
                <span>34 Street Name, City Name Here, United States</span>
              </li>
              <li className="contact">
                <p>Telephone:</p>
                <Link to="/">+1 242 4942 290</Link>
              </li>
              <li className="contact">
                <p>Email:</p>
                <Link to="">info@yourdomain.com</Link>
              </li>
            </ul>
          </div>
          <div className="col-3">
          <h4>QUICK LINKS</h4>
            <ul className="list-unstyled  footer-links">
              <li>
                <Link to="">About</Link>
              </li>
              <li>
                <Link to="">Terms of Use</Link>
              </li>
              <li>
                <Link to="">Disclaimers</Link>
              </li>
              <li>
                <Link to="">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footerBottom">
          <p style={{textAlign:"center"}}>Copyright © 2023 All rights reserved | This template is made with <AiFillHeart /> by <Link to="" style={{color:"red"}}> Colorlib</Link></p>
        </div>
     </div>
    </footer>
  );
};

export default Footer;
