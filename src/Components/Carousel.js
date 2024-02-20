import React, { useState } from 'react';
import RightArrow from '../Images/icons8-forward-50.png'
import leftArrow from '../Images/icons8-arrow-50.png'
import getCountry from '../Constants/Countries'
import './style.css'

const Carousel = (props) => {
    const {
        setShowChecklist,
        selectedGrant,
        nextGrant,
        prevGrant,
        length,
        taxes,
        index,
    } = props

    return (
       <div className='carouselContainer'>
            <img className='arrow' src={leftArrow} onClick={prevGrant}/>
            <img className='flag' src={getCountry(taxes, selectedGrant.taxRules[0]).img} />
            <h4  className='stakeholderName' onClick={(setShowChecklist)}>{selectedGrant.stakeholderName}</h4>
            <h4  className='index'> {`${index+1}/${length}`}</h4>
            <img className='arrow' src={RightArrow} onClick={nextGrant}/>
       </div>
    )
  }

  
export default Carousel;