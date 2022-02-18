import "./styles/Dessert.css";
import Dessert from "../assets/Data/alldeserts.json";
import CardDesserts from "../components/CardDeserts";

const Desserts = () => {

  return (
    <>
    <div className="menu" data-anchor="dessert">
      <h2>Nos Desserts</h2>
      <div className="pizza">
        {Dessert.allDesserts.map((el, id) => (
          <CardDesserts key={id} nom={el.nom} prix={el.prix} ingredients={el.ingredients} image={el.image} />
        ))}
      </div>
    </div>
    </>
  );
};

export default Desserts;
