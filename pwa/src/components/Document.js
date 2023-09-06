import React from 'react'
import './Document.css'
import { Link } from 'react-router-dom'
function Document() {
  return (
    <div className='document'>
        <div className='document-container'>
          <Link download={true} to="images/resume.pdf">
            <embed src="images/resume.pdf#toolbar=0&navpanes=0&scrollbar=0" type="application/pdf" width="100%" height="100%" />
          </Link>
        </div>
    </div>
  )
}

export default Document