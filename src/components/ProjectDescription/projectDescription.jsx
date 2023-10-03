import React from 'react'
import './projectDescription.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { hover } from '@testing-library/user-event/dist/hover';

export default function ProjectDescription(data) {

  const { title, categories, year, description, websiteLink } = data.project;


  return (
    <div className='description__wrapper'>

      <div className='description__head'>
        <div className='description-title'>
          <h2>{title}</h2>
        </div>
      </div>

      <div className='description__container'>
        <div className='project-data'>
          <table>
            <tbody>
              <tr>
                <td>
                  <h6>Catégorie</h6>
                </td>
                <td>
                  <ul >
                    {categories.map((category, index) => (
                      <li key={index}>{category}</li>
                    ))}
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  <h6>Année</h6>
                </td>
                <td>
                  <p>{year}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='project-description'>

          <div className='description'>
            <p>{description}</p>
          </div>

          <div className='website'>

            <a href={websiteLink} target='blank'>Accéder au site
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                style={{
                  paddingLeft: "10px",
                }}
                className="hoverable-icon"
              />
            </a>

          </div>

        </div>
      </div>
    </div>
  )
}
