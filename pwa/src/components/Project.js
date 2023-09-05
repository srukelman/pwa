import React from 'react'
import ProjectItem from './ProjectItem' 
import './Projects.css'
function Project() {
  return (
    <div className='projects'>
        <h1>Check Out My Projects!</h1>
        <div className='projects__container'>
            <div className='projects__wrapper'>
                <ul className='projects__items'>
                    <ProjectItem 
                        path="https://github.com/srukelman/stockOptionWebScraping"
                        src="images/stock-market-3.jpg"
                        text="Stock Option Web Scraping"
                        subtext1="This is a program I made to help my dad who likes to invest in stock options. Specifically, he writes/sells puts.
                        The goal is that he can find a put that seems attractive to the stock holder, but will expire worthless so that he makes a profit
                        from selling the put and does not have to purchase the stock(more info on puts here). What my program does to help him is that it
                        scrapes Yahoo Finance and analyzes each option available for the stocks on the DOW to find the one with the best return on investment."
                        subtext2="I built this program in Python using the BeautifulSoup library to organize/read the html code of Yahoo Finance. Then using
                        Google Chrome developer tools I found the IDs of the tags with the information I was looking for and created an instance of a PUT object
                        with all the relevant information. Then I created a list of PUT objects and sorted them by return on investment. Finally, I created a GUI
                        to display the most profitable options."
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
                        classificiation models, and I used TensorFlow to conduct a nonlinear regression on a scatterplot of the accuracy of each model at different training
                        set sizes. The digits came from the MNIST dataset."
                    />
                    <ProjectItem />
                    <ProjectItem />
                    <ProjectItem />
                    <ProjectItem />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Project