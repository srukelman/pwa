import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out these EPIC Projects!</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                    src = 'images/minesweeper.png'
                    text = 'minesweeper'
                    label = 'Minesweeper'
                    path='/projects'
                    />
                    <CardItem
                    src = 'images/frc.jpg'
                    text = 'FIRST Robotics Competition'
                    label = 'FRC'
                    path='/projects'
                    />
                    <CardItem
                    src = 'images/golf.jpg'
                    text = 'HandicapTracker'
                    label = 'HT'
                    path='/projects'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                    src = 'images/minesweeper.png'
                    text = 'minesweeper'
                    label = 'Minesweeper'
                    path='/projects'
                    />
                    <CardItem
                    src = 'images/frc.jpg'
                    text = 'FIRST Robotics Competition'
                    label = 'FRC'
                    path='/projects'
                    />
                    <CardItem
                    src = 'images/golf.jpg'
                    text = 'HandicapTracker'
                    label = 'HT'
                    path='/projects'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards