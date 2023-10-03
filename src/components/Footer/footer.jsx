import React from "react";
import '../Footer/footer.scss';
import copyright from '../../icones/copyright.svg';
import github from '../../icones/github.svg';
import linkedin from '../../icones/linkedin.svg';
import behance from '../../icones/behance.svg';


function Footer() {
    return (
        <footer className="footer">

            <div className="footer-contact">
                <h4>Contact</h4>
                <span>hugomouchonpro@gmail.com</span>
            </div>

            <div>
                <h4>Découvrez-moi ailleurs</h4>
                <div className="footer-reseaux-sociaux">
                    <a target='_blanck' href="https://github.com/HugoMouchon?tab=repositories"><img src={github} alt="" /></a>
                    <a target='_blanck' href="https://www.linkedin.com/in/hugo-mouchon/"><img src={linkedin} alt="" className="icone-linkedin" /></a>
                    <a target='_blanck' href="https://www.behance.net/hugomouchon"><img src={behance} alt="" className="icone-behance" /></a>
                </div>
            </div>

            <div className="footer-copyright">
                <img src={copyright} alt="" className="icone-copyright" /> <span>Crée et développé par Hugo en 2023</span>
            </div>

        </footer>
    );
}

export default Footer;
