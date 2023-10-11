import React from 'react';
import "./projectListItem.scss";

// Item qui prend en paramètre "image" afin de récupérer les données via projectData.json et qui permet d'afficher le titre de l'image et son image elle même.
export default function ProjectListItem({ image }) {
    return (
        <div className="project-list-item">
            <h6>{image.title}</h6>
            <img src={image.src} alt={image.title} />
        </div>
    );
}
