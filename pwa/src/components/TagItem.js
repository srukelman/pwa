import React from 'react'
import './Tags.css'

function TagItem(props) {
  return (
    <div className='tag-item-container'>
        <h5 className='tag-item-text'>{props.text}</h5>
    </div>
  )
}

export default TagItem