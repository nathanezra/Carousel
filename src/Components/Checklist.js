import React, { useState } from 'react';
import getCountry from '../Constants/Countries'

const Checklist = (props) => {

    const {
        onCheckGroup,
        onCheckGrant,
        checkedGroups,
        taxes,
    } = props

    const [displayGroupUsers, setDisplayGroupUsers] = useState([])

    const onDisplay = (tax) => {
        const newArray = {...displayGroupUsers}
        if(newArray.hasOwnProperty(tax)) {
            newArray[tax] = !newArray[tax]
        } else {
            newArray[tax] = true
        }
        setDisplayGroupUsers(newArray)
    }

    return (
        <div className='checklistContainer'>
            {Object.entries(checkedGroups).map(([tax, group]) => (
                <>
                    <div className='row' onClick = {() => onDisplay(tax)} key={tax}>
                        <img className='flag' src={getCountry(taxes, tax).img} />
                        <label className='taxLabel'>
                            <input
                                type="checkbox"
                                checked={group.checked}
                                onChange={() => onCheckGroup(tax)}
                            />
                            {tax}
                        </label>
                    </div>
                    {displayGroupUsers[tax] ? 
                            group.grants.map((grant) => (
                                <div className='row' key={group.id}>
                                    <div key={grant.name+tax}>
                                        <label className='grantLabel'>
                                            <input
                                                type="checkbox"
                                                checked={grant.checked && group.checked}
                                                onChange={() => onCheckGrant(tax, grant.name)}
                                            />
                                            {grant.name}
                                        </label>
                                    </div>
                                </div>
                            ))
                    : null}
                </>
            ))}
        </div>
  );
};

export default Checklist;
