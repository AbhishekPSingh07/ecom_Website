import React,{useState} from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './Slider.scss'
import { sliderItems } from '../Data';
const Slider = () => {
    const [slideIndex,setSlideIndex] = useState(0);
    const handleClick = (direction)=>{
        if(direction === 'left'){
            setSlideIndex(slideIndex > 0 ? slideIndex-1: 1)
        }else{
            setSlideIndex(slideIndex< 1 ? slideIndex+1: 0)
        }
    };
  return (
    <div className='container-slider'>
      <div className='Arrow left' onClick={()=>handleClick('left')}>
        <ArrowBackIosIcon/>
      </div>
      <div className='wrapper-slider' style={{transform: `translateX(${slideIndex * -100}vw)`}}>
        {sliderItems.map((item)=>(
        <div className='slide' style={{backgroundColor: item.bg}}>
            <div className='image-container'>
                <img className='image' src={item.img} alt=''/>
            </div>
            <div className='info-container'>
                <h1 className='title'>{item.title}</h1>
                <p className='description'>{item.desc}</p>
                <button className='button'>Shop Now</button>
            </div>
        </div>
        ))}
      </div>
      <div className='Arrow right' onClick={()=>handleClick('right')}>
        <ArrowForwardIosIcon/>
      </div>
    </div>
  )
}

export default Slider
