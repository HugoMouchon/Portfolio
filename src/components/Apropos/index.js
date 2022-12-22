import React, {useState} from "react";
import { Button } from "@mui/material"; 
import EastIcon from '@mui/icons-material/East';
import './apropos.scss';

function Apropos() {

    const [size, setSize] = useState('large'); // default is 'middle'

    return (
        <section className="apropos">
            <h3>Qui suis-je ?</h3>
            <p>Texte qui résume Hugo d’une longueur assez raisonnable. Il faut aussi qu’il donne envie d’en savoir plus pour aller voir sur la page “à propos/contact”</p>
            <Button variant="contained" icon={<EastIcon />} size={size}>En savoir plus</Button>
        </section>
    );
}

export default Apropos;
