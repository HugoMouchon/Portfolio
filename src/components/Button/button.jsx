// Button.js
import React from "react";
import "./button.scss";
import { Button as AntButton } from 'antd';

// Bouton utilisant la bibliothèque AntD et qui permet ici de naviguer entre les projets (Précedent / Suivant)
function Button({ text, onClick }) {
    return (
        <AntButton
            type="link"
            className="button"
            onClick={onClick}
        >
            {text}
        </AntButton>
    );
}

export default (Button);
