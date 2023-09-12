import React from 'react'
import { Link } from 'react-router-dom'
import './Document.css'
function Document() {
  const downloadResume = () => {
    window.open("images/resume.pdf", "_blank");
  }
  return (
    <div className='document'>
        <div className='document-container'>
          <Link id="dowloadBtn" onClick={downloadResume} >
          <embed src="images/resume.pdf#navpanes=0&scrollbar=0" type="application/pdf" width="100%"/>
          </Link>
        </div>
    </div>
  )
}

export default Document