import React, { useEffect, useState } from "react";
import "./styles/Menu.css";
import Pizzas from "../assets/DataPizza/allpizza.json";

const Menu = () => {
  console.log(Pizzas);

  return (
    <div className="menu">
      <div>
        <h2>{Pizzas.allPizza.map((name) => name.nom)}</h2>
      </div>
    </div>
  );
};

export default Menu;
