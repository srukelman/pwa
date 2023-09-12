import React from 'react'
import './Document.css'
function Document() {
  return (
    <div className='document'>
        <div className='document-container'>
          <embed src="images/resume.pdf#navpanes=0&scrollbar=0&toolbar=0" type="application/pdf" width="100%"/>
          <div className='document-button-wrapper'>
            <a href="images/resume.pdf" download="Sean Kelman Resume.pdf" target="_blank"><button className='document-button'><i class="fa fa-cloud-download document-button-icon" aria-hidden="true" />&emsp;Download Resume</button></a>
          </div>
        </div>
    </div>
  )
}

export default Document