import React from "react";
import '../Footer/footer.scss';
import copyright from '../../icones/copyright-solid.svg';
import github from '../../icones/github.svg';
import linkedin from '../../icones/linkedin.svg';


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
                    <a target='_blanck' href="https://github.com/HugoMouchon"><img src={github} alt="" /></a>
                    <a target='_blanck' href="https://www.linkedin.com/in/hugo-mouchon/"><img src={linkedin} alt="" className="icone" /></a>
                </div>
            </div>
            <div className="copyright">
                <img src={copyright} alt="" className="icone" /> <span>Tous droits réservés</span>
            </div>
        </footer>
    );
}

export default Footer;
