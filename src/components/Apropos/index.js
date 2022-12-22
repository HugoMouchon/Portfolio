import React from "react";
import './apropos.scss';
import { Button } from "antd";

function Apropos() {
    return (
        <section className="container">
                <h3>Qui suis-je ?</h3>
                <p>Texte qui résume Hugo d’une longueur assez raisonnable. Il faut aussi qu’il donne envie d’en savoir plus pour aller voir sur la page “à propos/contact”</p>
                <Button type="primary">En savoir plus</Button>
        </section>
    );
}

export default Apropos;
