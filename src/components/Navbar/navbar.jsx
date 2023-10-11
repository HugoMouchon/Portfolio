import React, { useEffect, useState } from "react";
import { BiDialpad } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./navbar.scss";
import Logo from "../Logo/Logo";
import github from "../../icones/github.svg";
import linkedin from "../../icones/linkedin.svg";
import behance from '../../icones/behance.svg';
import tree from "../../img/tree.svg";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  const handleEscapeKey = (event) => {
    if (event.key === "Escape") {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleEscapeKey);

    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  return (
    <header className="nav">
      <div className="nav__content">
        <Link to="/" className="nav__content__logo"><Logo /></Link>
        <nav
          className={`${"nav__content__nav"} ${menuOpen ? `${"isMenu"}` : ""}`}
        >
          <div className="nav__link__tree">
            <div>
              <ul>
                <li>
                  <h1 className="nav-title" data-number="01"><Link to="/">Accueil</Link></h1>
                </li>
                <li>
                  <h1 className="nav-title" data-number="02"><Link to="/Menu-Projects">Mes Projets</Link></h1>
                </li>
                <li>
                  <h1 className="nav-title" data-number="03"><Link to="/A-Propos-De-Moi">En savoir plus sur moi</Link></h1>
                </li>

                <div className="burger-reseaux-sociaux">
                  <a target='_blanck' href="https://github.com/HugoMouchon?tab=repositories"><img src={github} alt="" />Github</a>
                  <a target='_blanck' href="https://www.linkedin.com/in/hugo-mouchon/"><img src={linkedin} alt="" />Linkedin</a>
                  <a target='_blanck' href="https://www.behance.net/hugomouchon"><img src={behance} alt="" />Bẽhance</a>
                </div>
              </ul>
            </div>
            <div className="tatoo-tree">
              <img src={tree} alt="" />
            </div>
          </div>
        </nav>

        <div className={`${"nav__content__toggle"} ${menuOpen ? `${"isMenu"}` : ""}`}>
          {!menuOpen ? (
            <BiDialpad
              onClick={menuToggleHandler}
              className="burger-open"
            />
          ) : (
            <AiOutlineClose
              onClick={menuToggleHandler}
              className="burger-closed"
            />
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
