import React from "react";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";

import "./styles/Contact.css";

export default function Contact() {
  let changeImg = () => {
    document.getElementById("contactMapiframe").style.display = "block";
    document.getElementById("contactMapimg").style.display = "none";
    document.getElementById("contactMaptext").style.display = "none";
  };

  const [showDialog, setShowDialog] = React.useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);

  const [showDialog2, setShowDialog2] = React.useState(false);
  const open2 = () => setShowDialog2(true);
  const close2 = () => setShowDialog2(false);

  const [showDialog3, setShowDialog3] = React.useState(false);
  const open3 = () => setShowDialog3(true);
  const close3 = () => setShowDialog3(false);

  return (
    <>
    <div  className="contact">
      <div className="contactTitle"><h1>Informations Pratique</h1></div>
      <div>
    <div className="contactContenue" onWheel={() => close() & close2() & close3()}>
    <div className="contactLeft">
        <h2>Nous Contacter</h2>
        <div className="contactNum">
          Par téléphone : 0612234545
        </div>
        </div>
      <div className="contactLeft">
        
        <h2>Nos Horaires</h2>
        <div className="contactHoraires">
          <div>
            <div>Lundi : </div>
            <div>Mardi : </div>
            <div>Mercredi : </div>
            <div>Jeudi : </div>
            <div>Vendredi : </div>
            <div>Samedi :</div>
            <div>Dimanche :</div>
          </div>
          <div>
            <div>Fermé</div>
            <div>18h/23h</div>
            <div>18h/23h</div>
            <div>18h/23h</div>
            <div>18h/23h</div>
            <div>11h/15h et 18h/23h</div>
            <div>11h/15h et 18h/23h</div>
          </div>
        </div>
      </div>

      <div className="contactLeft">
      <h2>Nous trouver</h2>
      <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/Mairie+de+Lens/@50.428834,2.829709,17z/data=!3m1!4b1!4m5!3m4!1s0x47dd2e3157a7ee19:0xcadf71509430b2b9!8m2!3d50.4286779!4d2.8322689">
        <p className="contactAdresse">Mairie de Lens 17 bis, place Jean-Jaurès 62300 Lens</p>
        </a>
        <div className='contactMap' onClick={() => changeImg()}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1241.7892298105999!2d2.8336069771988575!3d50.42937802903404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dd30fd0f26d3d9%3A0xc3565c4576fbf535!2s%C3%89glise%20catholique%20Saint-L%C3%A9ger%20%C3%A0%20Lens!5e0!3m2!1sfr!2sfr!4v1644855656224!5m2!1sfr!2sfr"
            width="300"
            title="map"
            height="300"
            loading="lazy"
            id="contactMapiframe"
          ></iframe>
          <img
            src="https://i.ibb.co/0CrqjsJ/pizzamap.png"
            alt="imgmap"
            width="300"
            height="300"
            id="contactMapimg"
          ></img>
          <p id="contactMaptext">Afficher la carte</p>
        </div>
      </div>
      </div>
      <div className="footer">
        <div className="footerSpace">
          <div onClick={open}>Mentions Légales</div>
          <Dialog
            onClick={close}
            // onWheel={open}
            className="dialog"
            isOpen={showDialog}
            onDismiss={close}
          >
            <h2>Mentions Légales</h2>
            <h3>Nom du restaurant</h3>
            <p>Pizza test</p>
            <h3>Nom de la société</h3>
            <p>a remplir</p>
            <h3>Forme juridique</h3>
            <p>a remplir</p>
            <h3>Capital Social</h3>
            <p>a remplir</p>
            <h3>Adresse du Siège Social</h3>
            <p>a remplir</p>
            <h3>Numéro de Siret</h3>
            <p>a remplir</p>
            <h3>N° d'identification TVA</h3>
            <p>a remplir</p>
            <h3>Responsable</h3>
            <p>a remplir</p>
          </Dialog>
          <div onClick={open2}>Copyright</div>
          <Dialog
            onClick={close2}
            // onWheel={close2}
            className="dialog"
            isOpen={showDialog2}
            onDismiss={close2}
          >
            <h2>Copyright</h2>
            <p>Tous droits reservés</p>
            <p>Y. Lanteri / Milhan Verschelle</p>
            <p>y1n6@protonmail.com / M</p>
            <p>Article L111-1</p>
            <p>Article L112-2</p>
            <p>Article L112-3</p>
            <p>Article L-122-4</p>
            <p>Article 122-5</p>
            <p>Article L335-2</p>
            <p>Article L335-3</p>
            <p>Article 335-4</p>
            <p>"Chacun a droit à la protection des intérêts moraux et matériels découlant de toute production scientifique, littéraire ou artistique dont il est l'auteur.."

Article 27.2 de la Déclaration Universelle des Droits de l'Homme</p>

          </Dialog>
          <div onClick={open3}>Crédits</div>
          <Dialog
            onClick={close3}
            onWheel={close3}
            className="dialog"
            isOpen={showDialog3}
            onDismiss={close3}
          >
            <h2>Crédits</h2>
            <p>Création originales :</p>
            <p>Pimpus</p>
            <p>Y1N / <a style={{color: "white"}} target="_blank" rel="noopener noreferrer" href="https://y1n.fr">www.y1n.fr</a></p>
            <p>Crédits :</p>
          </Dialog>
        </div>
      </div>
    
    </div>
    </div>
    </>
  );
}
