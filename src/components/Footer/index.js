import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../Footer/footer.scss';


function Footer() {
    return (
        <footer className="footer">
            <div className="contact">
                <span>Contactez-moi:</span>
                <span>06 36 49 51 04</span>
                <span>h.mouchon@gmail.com</span>
            </div>
            <div>
                <span>Découvrez-moi ailleurs:</span>
                <div className="reseauxSociaux">
                    <FontAwesomeIcon icon="fa-brands fa-github" className="icon" />
                    <FontAwesomeIcon icon="fa-brands fa-linkedin" className="icon" />
                </div>
            </div>
            <div>
                <FontAwesomeIcon icon="fa-solid fa-copyright" /> <span>Tous droits réservés</span>
            </div>
        </footer>
    );
}

export default Footer;
