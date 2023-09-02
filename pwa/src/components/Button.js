import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css'

function Button(props) {
    const myStyle = {
        fontSize: '3em'
    }
  return (
    <>
        <Link to={props.path} className='btn-mobile' target="_blank" rel="noopener noreferrer">
            <button className={`btn ${props.buttonStyle} ${props.buttonSize}`}
            onClick={props.onClick}
            type={props.type}>
                <i className={props.icon} aria-hidden="true" style={myStyle}></i>
            </button>
        </Link>
    </>
  )
}

export default Button