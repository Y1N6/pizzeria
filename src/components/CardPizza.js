import React from "react";
import "./styles/CardPizza.css";

const CardPizza = (props) => {
    return (
      <div className="pizzaContainer">
        <div className="imgContainer">
          <img src={props.image} alt={props.nom}></img>
        </div>
        <div className="detail-wrapper">
            <h3 className="pizzaName">{props.nom}</h3>
            {/* <p>{props.ingredients}</p> */}
            <p>
            {props.ingredients.map((name, id, arr) => {
                      if (id < arr.length - 1) {
                        return name + ', '
                      } else {
                        return name + "."
                      }
                    })}
            </p>
            <select name="taille" id="taille-select">
              <option value="">Taille</option>
              <option value="dog">Simple</option>
              <option value="cat">Medium</option>
              <option value="cat">Géante</option>
            </select>
            <div className="Holderprice">
            <p className="price">{props.prix}€</p>
            </div>
        </div>
      </div>
    );
  };
  
  export default CardPizza;
  