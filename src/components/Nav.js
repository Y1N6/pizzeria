import "./styles/Nav.css";

import Logo from "../assets/logo.png";

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
        <li className="navCommander">
          <a href="#">Commander</a>
        </li>
        <li data-menuanchor="contact" className="active">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
