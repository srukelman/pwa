import React from 'react'
import './Footer.css'
import Button from './Button'

function Footer() {
    
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                Check out my Socials!
            </p>
            <div className='social-media-wrap'>
                <Button buttonStyle='btn--outline' buttonSize="btn--medium" path="https://github.com/srukelman" icon="fa fa-github"/>
                <Button buttonStyle='btn--outline' buttonSize="btn--medium" path="mailto:seanrkelman@gmail.com" icon="fa fa-envelope-o"/>
                <Button buttonStyle='btn--outline' buttonSize="btn--medium"path="https://www.linkedin.com/in/sean-kelman-633057211/" icon="fa fa-linkedin-square"/>
                <Button buttonStyle='btn--outline' buttonSize="btn--medium" path="https://github.com/srukelman" icon="fa fa-instagram"/>
            </div>
            
        </section>
    </div>
  )
}

export default Footer