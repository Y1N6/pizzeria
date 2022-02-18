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
          <a href="#home">Accueil</a>
        </li>
        <li data-menuanchor="pizza" className="navCommander">
          <a href="#pizza" style={{color: "green"}}>Pizzas</a>
        </li>
        <li data-menuanchor="pates" className="navCommander">
          <a href="#pates">Pâtes</a>
        </li>
        <li data-menuanchor="dessert" className="navCommander" >
          <a href="#dessert" style={{color: "red"}}>Desserts</a>
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
