import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './Slider.scss'
const Slider = () => {
  return (
    <div className='container-slider'>
      <div className='Arrow left'>
        <ArrowBackIosIcon/>
      </div>
      <div className='wrapper-slider'>
        <div className='slide'>
            <div className='image-container'>
                <img className='image' src='https://i.ibb.co/XsdmR2c/1.png' alt=''/>
            </div>
            <div className='onfo-container'></div>
        </div>
      </div>
      <div className='Arrow right'>
        <ArrowForwardIosIcon/>
      </div>
    </div>
  )
}

export default Slider
