import React, { Fragment, useState } from 'react';
import Dropdown from './Dropdown';
import { Container} from './NavBarStyle';
import  logo1  from "../../../Pictures/logo1.svg";
import facebook from "../../../Pictures/facebook.svg";
import instagram from "../../../Pictures/instagram.svg";
import twitter from "../../../Pictures/twitter.svg";
import France45 from "../../../Pictures/France45.svg";
import chevron from "../../../Pictures/chevron.svg";


const NavBar = (props) => {
  const [colorChange, setColorChange] = useState(false);
  const changeNavBarColor = () => {
    if (window.scrollY >= 90) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };
  window.addEventListener("scroll", changeNavBarColor);

  const [linkColorChange, setLinkColorChange] = useState(false);
  const changeNavLinkColor = () => {
    if (window.scrollY >= 90) {
      setLinkColorChange(true);
    } else {
      setLinkColorChange(false);
    }
  };
  window.addEventListener("scroll", changeNavLinkColor);
  return (
    <Fragment>
      <Container>
        <div className="upper">
          <a
            className={linkColorChange ? "navLogo linkColorChange" : "navLogo"}
            href="#"
          >
            <img src={logo1} alt="" />
          </a>
          <button className="report_button">Report a case</button>
        </div>
        <nav className={colorChange ? "navbar colorChange" : "navbar"}>
          <div className="navContainer">
            <div className="navMenu">
              <li className="navItem">
                <a
                  className={
                    linkColorChange ? "navLinks linkColorChange" : "navLinks"
                  }
                >
                  About us
                </a>
              </li>
              <li className="navItem">
                <a
                  className={
                    linkColorChange ? "navLinks linkColorChange" : "navLinks"
                  }
                >
                  Media
                </a>
              </li>

              <li className="navItem">
                <a
                  className={
                    linkColorChange ? "navLinks linkColorChange" : "navLinks"
                  }
                >
                  Get Involved
                </a>
              </li>
              <li className="navItem">
                <a className= {
                    linkColorChange ? "navLinks linkColorChange" : "navLinks"
                  }>Contact us</a>
              </li>

              <div className="socials">
                <li>
                  <a className="facebook" href="#">
                    <img src={facebook} alt="" />
                  </a>
                </li>

                <li>
                  <a className="instagram" href="#">
                    <img src={instagram} alt="" />
                  </a>
                </li>
                <li>
                  <a className="twitter" href="#">
                    <img src={twitter} alt="" />
                  </a>
                </li>
                <div className="translate">
                  {/* <li>
                    <a className="france45" href="#">
                      <img src={France45} alt="" />
                    </a>
                  </li>  */}
                   {/* <li className="chevron">
                    <a>FR</a>
                    <a className="chevron_down" href="#">
                      <img src={chevron} alt="" />
                    </a>
                  </li>  */}
                 <Dropdown/>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </Container>
    </Fragment>
  );
};

export default NavBar;
