import React, { useState } from 'react';
import RightArrow from '../Images/icons8-forward-50.png'
import leftArrow from '../Images/icons8-arrow-50.png'
import countries from '../Constants/Countries'

const Carousel = (props) => {
    const {
        selectedGrant,
        nextGrant,
        prevGrant,
        taxes,
    } = props

    const getCountryCode = () => {
        console.log(taxes)
        const selectedTax = taxes.find(tax => tax.taxRuleName === selectedGrant.taxRules[0])
        return selectedTax.countryCode
    }

    console.log(selectedGrant)
    console.log(countries)
    return (
       <div>
            <button onClick={prevGrant}>
                <img src={leftArrow} />
            </button>
            <img src={countries[getCountryCode()].img} />
            {selectedGrant.stakeholderName}
            <button onClick={nextGrant}>
                <img src={RightArrow} />
            </button>
       </div>
    )
  }

  
export default Carousel;