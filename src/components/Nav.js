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
          <a href="#pizza" style={{ color: "green" }}>
            <p>Pizzas</p>
            <img src={Logo} alt="pizza" className="navMobileLogo"></img>
          </a>
        </li>
        <li data-menuanchor="pates" className="navCommander">
          <a href="#pates">
            <p>Pâtes</p>
            <img
              src="https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/64/000000/external-farfalle-italian-food-icongeek26-linear-colour-icongeek26.png"
              alt="pizza"
              className="navMobileLogo"
            ></img>
          </a>
        </li>
        <li data-menuanchor="dessert" className="navCommander">
          <a href="#dessert" style={{ color: "red" }}>
            <p>Desserts</p>
            <img
              src="https://img.icons8.com/emoji/48/000000/shortcake.png"
              alt="pizza"
              className="navMobileLogo"
            ></img>
          </a>
        </li>
        <li data-menuanchor="contact" className="active">
          <a href="#contact">
            <p>Contact</p>
            <img
              src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/000000/external-phone-notification-xnimrodx-lineal-color-xnimrodx.png"
              alt="pizza"
              className="navMobileLogo"
            ></img>
          </a>
        </li>
      </ul>
      <div className="navCertif">
        <img src={Certif} alt="certif" className="logoCertif"></img>
      </div>
    </div>
  );
};

export default Nav;
