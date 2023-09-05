import React from 'react'
import './Projects.css'
import { Link } from 'react-router-dom'

function ProjectItem(props) {
  return (
    <>
        <li className='project-item'>
            <Link className='project-item-link' to='{props.path}'>
                <div className='project-item-info'>
                    <h5 className='project-item-text'>{props.text}</h5>
                    <p className='project-item-subtext'>{props.subtext1}</p>
                    <p className='project-item-subtext'>{props.subtext2}</p>
                </div>
                <img src={props.src} alt="Sean Kelman Project" className='project-item-img' />
            </Link>
        </li>
    </>
  )
}

export default ProjectItem