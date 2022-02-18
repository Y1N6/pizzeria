import React from "react";


const CardDeserts = (props) => {
    return (
      <div className="pizzaContainer">
        <div className="imgContainer">
          <img src={props.image} alt={props.nom}></img>
        </div>
        <div className="detail-wrapper">
            <h3 className="Name">{props.nom}</h3>
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
            <div className="Holderprice">
            <p className="price">{props.prix}€</p>
            </div>
        </div>
      </div>
    );
  };
  
  export default CardDeserts;