import React from 'react';
import "./projectListItem.scss";

export default function ProjectListItem({ image }) {
    return (
        <div className="project-list-item">
            <h6>{image.title}</h6>
            <img src={image.src} alt={image.title} />
        </div>
    );
}
