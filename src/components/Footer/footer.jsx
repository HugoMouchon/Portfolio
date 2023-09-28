import React from "react";
import '../Footer/footer.scss';
import copyright from '../../icones/copyright.svg';
import github from '../../icones/github.svg';
import linkedin from '../../icones/linkedin.svg';


function Footer() {
    return (
        <footer className="footer">

            <div className="contact">
                <span>Contact</span>
                <span>hugomouchonpro@gmail.com</span>
            </div>

            <div>
                <span>Découvrez-moi ailleurs:</span>
                <div className="reseaux-sociaux">
                    <a target='_blanck' href="https://github.com/HugoMouchon?tab=repositories"><img src={github} alt="" /></a>
                    <a target='_blanck' href="https://www.linkedin.com/in/hugo-mouchon/"><img src={linkedin} alt="" className="icone-linkedin" /></a>
                </div>
            </div>

            <div className="copyright">
                <img src={copyright} alt="" className="icone-copyright" /> <span>Crée et développé par Hugo 2023</span>
            </div>

        </footer>
    );
}

export default Footer;
