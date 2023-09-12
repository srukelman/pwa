import React from 'react'
import ProjectItem from './ProjectItem' 
import './Projects.css'
function Project() {
  return (
    <div className='projects'>
        <div className='projects__container'>
            <div className='projects__wrapper'>
                <ul className='projects__items'>
                    <ProjectItem 
                        path="https://github.com/srukelman/micromouse"
                        src="images/maze.png"
                        text="MicroMouse"
                        subtext1="I made this because I got really interested in MicroMouse. Since I don't have a robot or the materials to create a physical maze,
                        I wanted to simulate a MicroMouse. My maze solver uses a breadth-first search(BFS) because that is
                        guaranteed to find the shortest path. I have also implemented a depth-first search(DFs) and Djikstra's algorithm to solve the maze. I am
                        currently implementing an A* solution and a neural network solution. I also plan to create a program to generate a random maze."
                        subtext2="I built the GUI in Java Swing. I built the maze solver in Java because I wanted to make sure that the data structures and algorithms practice I was getting in 
                        Python would translate and it did."
                        tag1="Java" tag2="AI/ML" tag3="Algorithms and Data Structures"
                    />
                    <ProjectItem 
                        path="https://github.com/srukelman/pwa"
                        src="images/websie.png"
                        text="Portfolio Website"
                        subtext1="This is the website you are currently viewing. I built this website using React.js, so I could learn more and practice my React.js skills. Using React also makes my website look better and more responsive. I also learned about Progressive Web Apps (PWA)
                        during this project, and after completing the React Website, I converted it into a PWA."
                        tag1="React.js" tag2="Web Development" tag3="PWA"
                    />
                    <ProjectItem 
                        path="https://github.com/srukelman/stockOptionWebScraping"
                        src="images/stock-market-3.jpg"
                        text="Stock Option Web Scraping"
                        subtext1="This is a program I made to gather data for and analyze stock options (e.g. writing/selling puts).
                        I made this for my dad who likes to write puts, but had no way to efficiently gather data on the options he was looking at. This program
                        gathers data for all the stock options on Yahoo Finance and sorts them by return on investment. Then it displays the most profitable options
                        to help him decide which options to write."
                        subtext2="I built this program in Python using the BeautifulSoup library to organize/read the html code of Yahoo Finance. Then I 
                        gathered the puts based on the IDs of the tags with all the relevant information. Then I sorted them by expected return on investment. Finally, I created a GUI
                        to display the most profitable options."
                        tag1="Python" tag2="Algorithms and Data Structures" tag3="Webscraping"
                    />
                    <ProjectItem
                        path="https://github.com/srukelman/handwritten-digit-classification"
                        src="images/digit_classification.png"
                        text="Handwritten Digit Classification"
                        subtext1="This is a program I made while teaching myself about Machine Learning and Neural Networks. This project has two parts. First,
                        I train and test scikit-learn models on a dataset of handwritten digits, then test each model and grade each model's accuracy from
                        0 to 1. For the second part, I used TensorFlow to conduct a nonlinear regression on a scatterplot of the accuracy of each model at
                        increments of 10 in the size of the training data."
                        subtext2="I built this program in Python using the scikit-learn and TensorFlow libraries. I used the scikit-learn library to train and test
                        classification models, and I used TensorFlow to conduct a nonlinear regression on a scatterplot of the accuracy of each model at different training
                        set sizes. The digits came from the MNIST dataset."
                        tag1="Python" tag2="TensorFlow" tag3="AI/ML"
                    />
                    <ProjectItem 
                        path="https://github.com/srukelman/HandicapTracker"
                        src="images/golf.jpg"
                        text="HandicapTracker"
                        subtext1="This is a website for golfers to use to track their handicap. Using this website, golfers could enter their scores from
                        rounds of golf and the website would calculate their handicap. This was a really useful tool for myself and my friends who were able to use this
                        website for free rather than paying for a subscription to a similar website. (Note: a golf handicap is a measurement that allows
                        for a numerical comparison of the skill level of golfers based on their past scores.)"
                        subtext2="This program uses HTML, CSS, and JavaScript for the front-end built on an AMP Stack with Apache, MySQL and PHP."
                        tag1="PHP" tag2="SQL" tag3="Web Development"
                    />
                    <ProjectItem
                        path="https://github.com/Team-6220/2023"
                        src="images/frc.jpg"
                        text="FIRST Robotics Competition"
                        subtext1="I was the team captain and lead programmer for the 2023 season and lead programmer for the 2022 season. I wrote
                        Java code to control the robot including both remotely operated and autonomously."
                        subtext2="Through this experience, I learned a lot about robotics and using sensors and cameras to control the robot semi-autonomously. I also used Python
                        to do camera vision for the robot to aim and shoot at the target."
                        tag1="Java" tag2="Python" tag3="Robotics"
                    />
                    <ProjectItem
                        path="https://github.com/srukelman/Minesweeper"
                        src="images/minesweeper.png"
                        text="Minesweeper"
                        subtext1="This is a small minesweeper game I put together during high school. In the GitHub, there is a .jar file, so you can download and play
                        for yourself. I built this game in Java. This was one of my first real OOP programs that I felt like was really an accomplishment, not just an assignment for a class."
                        tag1="Java" tag2="Algorithms and Data Structures" tag3="GUI"
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Project