import React from 'react';
import '../styles/carousel.css';
import six from '../assets/6.webp'
import seven from '../assets/7.jpg'
import eight from '../assets/g.jpg'
import nine from '../assets/eight.jpg'
import ten from '../assets/ten.jpg'
import eleven from '../assets/eleven.jpg'
import twelve from '../assets/twelve.jpg'
import thirteen from '../assets/13.webp'
import two from '../assets/two.jpg'

const Items = () => {


  return (
    <div className='carousel'>
      <div className='carousel-div'>
        <div className='car-flex'>
          <div className='card'>
            <img src={six} alt='fashion' />
            <h4>DAZY Women's Loose Fit Padded Coat </h4>
            <p className='orange'>#Best Seller</p>
            <p>R 350</p>
         
          </div>
          <div>
          <img src={ten} alt='fashion' />
          <h4>Vintage American Style  </h4>
          <p>R 150</p>
         
          </div>
          <div>
          <img src={eleven} alt='fashion' />
          <h4>
          NEW Sunnyshic Women's Casual Loos... </h4>
           <p className='orange'>#Best Seller</p>
          <p>R 450</p>
          </div>
          <div>

          <img src={nine} alt='fashion' />
          <h4>Manfinity Hypemode Men's Autumn</h4>
           <p className='orange'>#Best Seller</p>
          <p>R 800</p>
   
          </div>
          <div>
          
          <img src={eight} alt='fashion' />
          <h4>MOD Solid Ruched Cami </h4>
          <p>R 400</p>
          </div> 
          <div>
          <img src={seven} alt='fashion' />
          <h4>Manfinity Streetrush
          </h4>
          <p>R 200</p>
          </div>
          <div>
          <img src={thirteen} alt='fashion' />
          <h4>MOOSTA Solid Drop Sh </h4>
          <p>R 100</p>
          </div>
          <div>
          <img src={twelve} alt='fashion' />
          <h4>MOD Solid Ruched Cami </h4>
          <p>R 400</p>
          </div>
          <div>
          <img src={two} alt='fashion' />
          <h4>MOD Solid Ruched Cami </h4>
          <p>R 400</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
