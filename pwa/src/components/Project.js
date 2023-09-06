import React from 'react'
import ProjectItem from './ProjectItem' 
import './Projects.css'
function Project() {
  return (
    <div className='projects'>
        <h4>Click on a project to go to its GitHub Repo</h4>
        <div className='projects__container'>
            <div className='projects__wrapper'>
                <ul className='projects__items'>
                    <ProjectItem 
                        path="https://github.com/srukelman/micromouse"
                        src="images/maze.png"
                        text="MicroMouse"
                        subtext1="This is a program I made because I got really interested in MicroMouse. Since I don't have a robot and creating physical mazes
                        would require materials I don't have. I made a GUI to design a maze, then created a program to solve the maze. The current maze solver uses
                        a breadth-first search(BFS) because that is guaranteed to find the shortest path. I plan to implement other algorithms to solve the maze, such as depth-
                        first search(DFS), A*, Djikstra's, and a neural network. I also plan to create a program to generate a random maze."
                        subtext2="I built the GUI in Swing because I already had a lot of experience with Swing and I knew it would be easy and the GUI wasn't the main
                        part of the project. I built the maze solver in Java because I wanted to make sure that the data structures and algorithms practice I was getting in 
                        Python would translate and it did."
                        tag1="Java" tag2="AI/ML" tag3="Algorithms and Data Structures"
                    />
                    <ProjectItem 
                        path="https://github.com/srukelman/pwa"
                        src="images/websie.png"
                        text="Portfolio Website"
                        subtext1="This is the website you are currently viewing. I built this website using React.js. I also learned about Progressive Web Apps
                        during this project and the I plan to turn this website into a Progressive Web App. During this project I learned more and practice creating with React.js."
                        subtext2="I had originally built my portfolio in HTML and CSS with no JavaScript. It was very plain and not even responsive. I decided to rebuild it
                        using React so I could make it look better and make it responsive. I also wanted to try to create a Progressive Web App, and I had researched and learned that
                        creating a website in React would be a good starting point to create a PWA."
                        tag1="React.js" tag2="Web Development" tag3="PWA"
                    />
                    <ProjectItem 
                        path="https://github.com/srukelman/stockOptionWebScraping"
                        src="images/stock-market-3.jpg"
                        text="Stock Option Web Scraping"
                        subtext1="This is a program I made to gather data for and analyze stock options. Specifically, for writing/selling puts.
                        The goal is to find a put that seems attractive to the stock holder, but will expire worthless so that I make a profit
                        from selling the put and don't have to purchase the stock."
                        subtext2="I built this program in Python using the BeautifulSoup library to organize/read the html code of Yahoo Finance. Then I 
                        looked through the HTML code, and I found the IDs of the tags with the information I was looking for and created an instance of a PUT object
                        with all the relevant information. Then I created a list of PUT objects and sorted them by return on investment. Finally, I created a GUI
                        to display the most profitable options."
                        tag1="Python" tag2="Algorithms and Data Structures" tag3="Webscraping"
                    />
                    <ProjectItem
                        path="https://github.com/srukelman/handwritten-digit-classification"
                        src="images/digit_classification.png"
                        text="Handwritten Digit Classification"
                        subtext1="This is a program I made while teaching myself about Machine Learning and Neural Networks. This project has two parts. First,
                        where I train and test scikit-learn models on a dataset of handwritten digits, then test each model and grade each model's accuracy from
                        0 to 1. Then I wanted to analyze the effectiveness of each model to see how the accuracy of each model varied based on how much training
                        data was provided. For this part I used TensorFlow to conduct a nonlinear regression on a scatterplot of the accuracy of each model at
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
                        website for free rather than paying for a subscription to a similar website. For those of you who don't golf, a handicap is a measurement that allows
                        for a numerical comparison of the skill level of golfers based on their past scores."
                        subtext2="It uses HTML, CSS, and JavaScript for the front-end built on an AMP Stack with Apache, MySQL and PHP. I stopped paying for the domain
                        name that the website was open on so you can't find it, but you can look through the code in the GitHub link above."
                        tag1="PHP" tag2="SQL" tag3="Web Development"
                    />
                    <ProjectItem
                        path="https://github.com/Team-6220/2023"
                        src="images/frc.jpg"
                        text="FIRST Robotics Competition"
                        subtext1="I was the team captain and lead programmer for the 2023 season and lead programmer for the 2022 season. My programming team and I write
                        Java code to control the robot include both remotely operated and autonomously."
                        subtext2="I was a part of my school's FRC Team for 2 years during my junior and senior years of high school. During my 1st year I was the programming
                        lead for the team. I worked with a team of 2 others to develop Java code for our robot for the Rapid React competition. During the offseason leading
                        in to my 2nd year with the team, I became the team captain. During the offseason, I also helped to educate new members in code to prepare them for the
                        upcoming season. During my 2nd season with the team I was team captain so I helped lead all subteams, while still being the lead developer for robot code."
                        tag1="Java" tag2="Python" tag3="Robotics"
                    />
                    <ProjectItem
                        path="https://github.com/srukelman/Minesweeper"
                        src="images/minesweeper.png"
                        text="Minesweeper"
                        subtext1="This is a small minesweeper game I put together during high school. In the GitHub link above there is a .jar file, so you can download and play
                        for yourself. I built this game in Java using Swing to make the GUI."
                        subtext2="I'm planning to go back and improve the playability of the game, since sometimes it freezes or clicks on the wrong place(something to do with the
                        MouseListener library i think). This was one of my first real OOP programs that I felt like was really an accomplishment, not just an assignment for a class."
                        tag1="Java" tag2="Algorithms and Data Structures" tag3="GUI"
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Project