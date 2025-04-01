import React from 'react'
import '../styles/card.css'
import CardItems from './CardItems'
import four from '../assets/four.png'
import hh from '../assets/hh.png'

const CardPage = () => {
  return (
    <>
    <div className='card-page'>
      <div className='p'>
      <h1>Explore Our Fashion Picks - Choose Your Fave! </h1>
      <p>Discover trendy styles made just for you. Mix and match to create your unique look</p>
      </div>
      <div className='card-flex'>
        <CardItems img = {hh} name= 'Air Jordan 4 RM' price='R1 700'/>
        <CardItems img={four} name='Outline Barocco Denim Jacket' price ='R22 000' />
        <div className='my-div'></div>
      </div>
    </div>
    </>
  )
}

export default CardPage
