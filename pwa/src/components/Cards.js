import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Check Out Some Of My Projects!</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                    src = 'images/maze.png'
                    text = 'Maze Generator and Solver'
                    label = 'Maze'
                    path='/projects'
                    />
                    <CardItem
                    src = 'images/frc.jpg'
                    text = 'FIRST Robotics Competition'
                    label = 'FRC'
                    path='/projects'
                    />
                    <CardItem
                    src = 'images/stock-market-3.jpg'
                    text = 'Stock Option Analysis'
                    label = 'Stocks'
                    path='/projects'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards