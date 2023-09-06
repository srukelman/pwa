import React from 'react'
import TagItem from './TagItem'
import './Tags.css'

function Tags(props) {
  return (
    <div className='tag-item-wrapper'>
        {/* <h5 className='tag-item-title'>Tags:</h5> */}
        <TagItem text={props.text1} />
        <TagItem text={props.text2} />
        <TagItem text={props.text3} />
    </div>
  )
}

export default Tags