import React from 'react'
import { Link } from 'react-router-dom'
import './Section.css'

function SectionItem(props) {
  return (
    <>
        <li className='section-item'>
            <Link className='section-item-link' to={props.path}>
                <img src={props.src} alt='Sean Kelman' className='section-item-img' />
                <div className='section-item-info'>
                    <h5 className='section-item-text'>{props.text}</h5>
                    <p className='section-item-subtext'>{props.subtext1}</p>
                    <p className='section-item-subtext'>{props.subtext2}</p>
                    <p className='section-item-subtext'>{props.subtext3}</p>
                    <p className='section-item-subtext'>{props.subtext4}</p>
                </div>
            </Link>
        </li>
    </>
  )
}

export default SectionItem