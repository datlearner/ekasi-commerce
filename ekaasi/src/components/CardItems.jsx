import React from 'react'
import '../styles/carditems.css'
import { BsCart } from "react-icons/bs";
import { useState } from 'react';

const CardItems = ({img, name, price}) => {

    const [count, setCount] = useState(0);

    function handleClicks () {
        setCount (count + 1);
    }

  return (
    <>
    <div className='card-one'>

        <img src = {img} alt='cloth' className='card-img' />
        <h4 className='card-name'>{name}</h4>
        <p className='card-price'>{price}</p>
        <button className='card-btn' onClick={handleClicks}>add to cart<BsCart className='iconnx' /><span className='spaan'>{count}</span> </button>
      
     </div>
    </>
  )
}

export default CardItems
