/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const Home = () => {
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  return (
    <>
    <div className='container'>
      <div className='nav'>
        <p>Free Shipping Options  its Available to <span>4803 , Midrand, South Africa</span> </p>
        <p className='pleft'>Free Shipping Over R200</p>
        <p>100 Day Returns</p>
      </div>
      <div className='nav-container'>
        
        <div className='ptags'>
            <p>shop</p>
            <p>collections</p>
            <p>gifts</p>
        </div>
        <h1 className='h1'>Ekasi Fashion</h1>
        <div>
            
        </div>
        <div className='icons'>
        <p>offers</p>
        <CiUser style={{margin: 10}} className='hover' />
        <CiSearch style={{margin: 10}} className='hover' />
        <HiOutlineShoppingBag style={{margin: 5}} className='hover' />
        </div>

      </div>
      <div className='menu'>
      <div class="swiper mySwiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <div className='page1'>

          <div className='bottom'>

            <h1>Shop your perfect branded set </h1>
            <p>Curated just for you - Style, Quality, and Brand in one set </p>

            <div className='flex'>
              <div className='btns'>
                <button>shop now <span className='whit'>&rarr;</span></button>
                <button>discover  <span className='whit'>&rarr;</span></button>
              </div>
              <div className='btn'>
                <button><span className='white'>&larr;</span></button>
                <button><span className='white'>&rarr;</span></button>
              </div>
            </div>

          </div>

        </div>
      </div>
      <div class="swiper-slide">
      <div className='page2'>

      </div>
      </div>
      <div class="swiper-slide">
      <div className='page3'>
      </div>
      </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-pagination"></div>
  </div>
      </div>
    </div>
    </>
  )
}

export default Home
