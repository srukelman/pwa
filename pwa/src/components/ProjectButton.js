import React from 'react'
import { Link } from 'react-router-dom'
import './ProjectButton.css'

function ProjectButton(props) {
  return (
    <>
        <Link className='project-link' target="_blank" to={props.path}>
            <div className='project-button'>
              <i className="fa fa-github"></i>
              <h5 className='project-button-text'>Go To Project</h5>
            </div>
        </Link>
    </>
  )
}

export default ProjectButton