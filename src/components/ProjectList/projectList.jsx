import React from 'react';
import ProjectListItem from '../ProjectListItem/projectListItem';
import projectData from "../../pages/Project/projectData.json";
import "./projectList.scss";

export default function ProjectList() {
  // Créez un tableau pour stocker toutes les images de tous les projets
  const allImages = [];

  // Parcourez chaque projet dans projectData
  Object.values(projectData).forEach((project) => {
    // Si le projet a un tableau 'image', ajoutez toutes les images à allImages
    if (Array.isArray(project.image)) {
      allImages.push(...project.image);
    }
  });

  return (
    <div className="list__container">
      {allImages.map((image, index) => (
        <ProjectListItem
          key={index}
          image={image}
        />
      ))}
    </div>
  );
}
