import React from 'react';
import ProjectListItem from '../ProjectListItem/projectListItem';
import projectData from "../../pages/Project/projectData.json";
import { useParams } from 'react-router-dom';
import "./projectList.scss";

// Container list qui permet de boucler chaque composant ProjectListItem
export default function ProjectList() {
  const { name } = useParams(); 
  const project = projectData[name];

  return (
    <div className="list__container">
      {project && project.images.map((image, index) => (
        <ProjectListItem
          key={index}
          image={image}
        />
      ))}
    </div>
  );
}
