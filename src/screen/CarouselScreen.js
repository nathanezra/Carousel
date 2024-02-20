import React, { useEffect, useState } from 'react';
import Carousel from '../Components/Carousel.js'
import './style.css'
import Checklist from '../Components/Checklist.js';

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

const CarouselScreen = (props) => {
    
    const [showChecklist, setShowChecklist] = useState(true)
    const [selectedGrant, setSelectedGrant] = useState(0)
    const [checkedGroups, setCheckedgroups] = useState(null)
    const [filteredGrants , setFilteredGrants ] = useState(grants)

    useEffect(() => {
        const taxPerUser = {}
    
        for (const grant of grants) {
            for (const tax of grant.taxRules) {
                if (taxPerUser[tax]) {
                    taxPerUser[tax].grants.push({name: grant.stakeholderName, checked: true})
                } else {
                    taxPerUser[tax] = {grants : [{name: grant.stakeholderName, checked: true}], checked: true}
                }
            }
        }
        setCheckedgroups(taxPerUser)
    },[])

    useEffect(() => {
        if (checkedGroups) {
            const newGrantsArray = grants.filter((grant) => grant.taxRules.some((taxRule) => checkedGroups[taxRule].checked))
                .map(grant => {
                    const newGrant = { ...grant }
                    newGrant.taxRules = newGrant.taxRules.filter(taxRule => {
                        const grantTax = checkedGroups[taxRule].grants.find(grantInGroup => grantInGroup.name === grant.stakeholderName)
                        return grantTax.checked
                    })
                    return newGrant
                })
                .filter((grant) => grant.taxRules.length > 0)
            setFilteredGrants(newGrantsArray)
            console.log(newGrantsArray)
        }
    },[checkedGroups])

    useEffect(() => {
        setSelectedGrant(0)
    },[filteredGrants])

   
    const onCheckGrant = (groupName, grantName) => {
        const newGrants = checkedGroups[groupName].grants.map(grant => {
            if(grant.name === grantName) {
                grant.checked = !grant.checked
            }
            return grant
        })

        setCheckedgroups(groups => ({
            ...groups,
            [groupName]: {checked: checkedGroups[groupName].checked, grants: newGrants}
        }))
    }

    const onCheckGroup = (groupName) => {
        setCheckedgroups(groups => ({
            ...groups,
            [groupName]: {...checkedGroups[groupName], checked: !checkedGroups[groupName].checked}
        }))
    }

    const nextGrant = () => {
        if (selectedGrant < filteredGrants.length - 1) {
            setSelectedGrant(selectedGrant+1)
        }
    }
    const prevGrant = () => {
        if (selectedGrant > 0) {
            setSelectedGrant(selectedGrant-1)
        }
    }

    return (
        <div>
            <div className='carouselNav'>
                <Carousel 
                    setShowChecklist={() => setShowChecklist(!showChecklist)}
                    selectedGrant={filteredGrants[selectedGrant]}
                    nextGrant={nextGrant}
                    prevGrant={prevGrant}
                    length={filteredGrants.length}
                    index={selectedGrant}
                    taxes={taxes}
                />
            </div>
            {checkedGroups && showChecklist ? 
                <Checklist 
                    checkedGroups={checkedGroups}
                    onCheckGroup={onCheckGroup}
                    onCheckGrant={onCheckGrant}
                    taxes={taxes}
                /> 
            : null}
        </div>
        
  )
}
export default CarouselScreen;