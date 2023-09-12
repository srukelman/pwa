import React from 'react'
import './Projects.css'
import { Link } from 'react-router-dom'
import Tags from './Tags'
import ProjectButton from './ProjectButton'

function ProjectItem(props) {
  return (
    <>
        <li className='project-item'>
            <div className='project-item-link'>
                <div className='project-item-info'>
                    <h5 className='project-item-text'>{props.text}</h5>
                    <div className='project-text-spacer'></div>
                    <p className='project-item-subtext'>{props.subtext1}</p>
                    <p className='project-item-subtext'>{props.subtext2}</p>
                    <Tags text1 = {props.tag1} text2 = {props.tag2} text3 = {props.tag3}/>
                    <ProjectButton path={props.path}/>
                </div>
                <div className='project-item-spacer'></div>
                <div className='project-item-img-wrapper'><img src={props.src} alt="Sean Kelman Project" className='project-item-img' /></div>
                
            </div>
        </li>
    </>
  )
}

export default ProjectItem