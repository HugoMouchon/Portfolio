import React from 'react'
import "./squares.scss";

// Carrés animés derrière la photo de profil dans la page "A propos"
export default function Squares() {
    return (
        <>
            <div className="rotating-square-three"></div>
            <div className="rotating-square-two"></div>
            <div className="rotating-square"></div>
        </>
    )
}
