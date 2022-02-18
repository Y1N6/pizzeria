import "./styles/Pizza.css";
import Pizzas from "../assets/Data/allpizza.json";
import CardPizza from "../components/CardPizza";

const Pizza = () => {

  return (
    <>
    <div className="menu menuPizza" data-anchor="pizza">
      <h2>Nos Pizzas</h2>
      <div className="pizza">
        {Pizzas.allPizza.map((el, id) => (
          <CardPizza key={id} nom={el.nom} prix={el.prix} ingredients={el.ingredients} image={el.image} />
        ))}
      </div>
    </div>
    </>
  );
};

export default Pizza;
