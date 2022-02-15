import "./styles/Nav.css";

import Logo from "../assets/logo.png";
import Certif from "../assets/certif.png";

const Nav = () => {
  return (
    <div id="nav">
      <div className="navLogo">
        <img src={Logo} alt="logo" className="logo"></img>
      </div>
      <ul className="navList">
        <li data-menuanchor="home" className="active">
          <a href="#home">Home</a>
        </li>
        <li data-menuanchor="menu" className="navCommander">
          <a href="#menu">Menu</a>
        </li>
        <li data-menuanchor="contact" className="active">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="navCertif">
        <img src={Certif} alt="certif" className="logoCertif"></img>
      </div>
    </div>
  );
};

export default Nav;
