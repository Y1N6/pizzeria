import React from "react";
import Pizza from "../assets/pizzaEating.gif";
import "./styles/Loading.css";

export default function loading() {
  return (
    <div className="loader">
      <img src={Pizza} alt="loader"></img>
    </div>
  );
}
