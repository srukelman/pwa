import React from 'react'
import SectionItem from './SectionItem'
import './Section.css'

function Sections() {
  return (
    <div className='sections'>
      <h1>Learn More About Me!</h1>
      <div className='sections-container'>
        <div className='sections-wrapper'>
          <ul className='sections-items'>
            <SectionItem 
            src="images/Sean02.jpg"
            path = "/about"
            text="About Me"
            subtext1="Hello! I'm Sean Kelman, and I'm currently a Computer Science and Engineering Student at UCI."
            subtext2="I've always enjoyed computer science, math, and anything that pushes me to my limits and really
             makes me think, learn, and work hard. But I also love to be creative and express myself through painting and cooking.
              In my free time, I love to break a sweat lifting weights at the gym or running."
            subtext3="My most recent work experience is working part-time as a Programmer at Newhope Law, PC. There I developed Python scripts to automate
            routine tasks, as well as maintained and updated the IT infrastructure of the office. I created an automated
            cloud filing program for emails and attachments based on the contents; created an automated cloud filing program for scanned
            documents based on contents; created a web scraping program to gather dates of upcoming patent refiling for all cases managed
            by the office."
            subtext4="I am currently looking for a role as a Software Engineer Intern where I can apply what I have learned in my coursework
            and gain more hands-on experience."/>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sections