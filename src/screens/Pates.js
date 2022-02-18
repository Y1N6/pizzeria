import "./styles/Pate.css";
import Pate from "../assets/Data/allpates.json";
import CardPates from "../components/CardPates";

const Pates = () => {

  return (
    <>
    <div className="menu menuPates" data-anchor="pates">
      <h2 className="pates" >Nos Pâtes</h2>
      <div className="pates" >
        {Pate.allPates.map((el, id) => (
          <CardPates key={id} nom={el.nom} prix={el.prix} ingredients={el.ingredients} image={el.image} />
        ))}
      </div>
    </div>
    </>
  );
};

export default Pates;
