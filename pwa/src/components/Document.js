import React from 'react'
import './Document.css'
function Document() {
  return (
    <div className='document'>
        <div className='document-container'>
            <embed src="images/resume.pdf#toolbar=0&navpanes=0&scrollbar=0" type="application/pdf" width="100%" height="100%" />
        </div>
    </div>
  )
}

export default Document