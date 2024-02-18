import React, { useEffect, useState } from 'react';
import Carousel from '../Components/Carousel.js'

const CarouselScreen = (props) => {
    
    const tax1 = {
        countryCode: 1,
        taxRuleName: "Rule A"
    }

    const tax2 = {
        countryCode: 2,
        taxRuleName: "Rule B"
    }
    
    const grant1 = {
        stakeholderName: "Aki Avni",
        taxRules: ["Rule B"]
    }
    
    const grant2 = {
        stakeholderName: "John Doe",
        taxRules: ["Rule A"]
    }
    
    const grants = [grant1, grant2]
    const taxes = [tax1, tax2]
    
    const taxPerUser = {}
    
    for (const grant of grants) {
        for (const tax of grant.taxRules) {
            if (taxPerUser[tax]) {
                taxPerUser[tax].push(grant.stakeholderName)
            } else {
                taxPerUser[tax] = [grant.stakeholderName]
            }
        }
    }
    
    const [selectedGrant, setSelectedGrant] = useState(0)

    const nextGrant = () => {
        if (selectedGrant < grants.length - 1) {
            setSelectedGrant(selectedGrant+1)
        }
    }
    const prevGrant = () => {
        if (selectedGrant > 0) {
            setSelectedGrant(selectedGrant-1)
        }
    }

    return (
        <Carousel 
            selectedGrant={grants[selectedGrant]}
            nextGrant={nextGrant}
            prevGrant={prevGrant}
            taxes={taxes}
        />
  )
}
export default CarouselScreen;