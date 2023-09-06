import React from 'react'
import './Projects.css'
import { Link } from 'react-router-dom'

function ProjectItem(props) {
  return (
    <>
        <li className='project-item'>
            <Link className='project-item-link' to={props.path}>
                <div className='project-item-info'>
                    <h5 className='project-item-text'>{props.text}</h5>
                    <div className='project-text-spacer'></div>
                    <p className='project-item-subtext'>{props.subtext1}</p>
                    <p className='project-item-subtext'>{props.subtext2}</p>
                </div>
                <div className='project-item-spacer'></div>
                <div className='project-item-img-wrapper'><img src={props.src} alt="Sean Kelman Project" className='project-item-img' /></div>
                
            </Link>
        </li>
    </>
  )
}

export default ProjectItem